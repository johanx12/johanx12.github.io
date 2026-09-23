/* =========================================================
   tunnel.js — Fondo cyberpunk: túnel wireframe infinito
   + lluvia de código Matrix. Canvas 2D puro, sin librerías.
   ========================================================= */
export function initTunnel() {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Capa 1: túnel wireframe ---------- */
  var tunnel = document.getElementById("bg-tunnel");
  var tctx = tunnel.getContext("2d");

  var W = 0, H = 0, DPR = 1;
  var SIDES = 8;          // octágono: se lee como túnel, no como círculo
  var RINGS = 26;         // anillos vivos a la vez
  var Z_FAR = 26;         // profundidad máxima
  var FOCAL = 520;        // distancia focal (perspectiva)
  var SPEED = 0.055;      // avance base por frame
  var rings = [];
  var spinBase = 0;
  var mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  var scrollBoost = 0;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    [tunnel, rain].forEach(function (c) {
      c.width = W * DPR;
      c.height = H * DPR;
      c.style.width = W + "px";
      c.style.height = H + "px";
      c.getContext("2d").setTransform(DPR, 0, 0, DPR, 0, 0);
    });
    buildRain();
  }

  function initRings() {
    rings = [];
    for (var i = 0; i < RINGS; i++) {
      rings.push({ z: (i / RINGS) * Z_FAR + 0.4, spin: 0 });
    }
  }

  // Proyecta el vértice v del anillo a pantalla.
  // k cae con la profundidad: lejos = punto de fuga, cerca = fuera del encuadre.
  function project(ring, v, cx, cy) {
    var ang = (v / SIDES) * Math.PI * 2 + ring.spin;
    var radius = Math.max(W, H) * 0.62;
    var k = 1 / (ring.z * 0.62 + 0.3);
    return {
      x: cx + Math.cos(ang) * radius * k,
      y: cy + Math.sin(ang) * radius * k * 0.95,
      k: k
    };
  }

  function drawTunnel() {
    tctx.clearRect(0, 0, W, H);

    // centro de fuga: sigue suavemente al mouse
    mouse.x += (mouse.tx - mouse.x) * 0.045;
    mouse.y += (mouse.ty - mouse.y) * 0.045;
    var cx = W / 2 + mouse.x * W * 0.085;
    var cy = H / 2 + mouse.y * H * 0.085;

    // resplandor del punto de fuga
    var g = tctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.55);
    g.addColorStop(0, "rgba(0,255,156,0.20)");
    g.addColorStop(0.35, "rgba(0,255,156,0.05)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    tctx.fillStyle = g;
    tctx.fillRect(0, 0, W, H);

    tctx.lineCap = "round";
    tctx.lineJoin = "round";

    var prev = null;
    var ordered = rings.slice().sort(function (a, b) { return b.z - a.z; });

    for (var r = 0; r < ordered.length; r++) {
      var ring = ordered[r];
      var depth = 1 - ring.z / Z_FAR;          // 1 = cerca, 0 = lejos
      var nearFade = Math.min(ring.z / 3.2, 1); // los anillos que ya te pasaron se apagan
      var alpha = Math.pow(depth, 1.5) * 0.8 * nearFade;
      if (alpha < 0.012) { prev = null; continue; }

      var pts = [];
      for (var v = 0; v < SIDES; v++) pts.push(project(ring, v, cx, cy));

      // aro del anillo
      tctx.beginPath();
      for (var i = 0; i < pts.length; i++) {
        if (i === 0) tctx.moveTo(pts[i].x, pts[i].y);
        else tctx.lineTo(pts[i].x, pts[i].y);
      }
      tctx.closePath();
      tctx.strokeStyle = "rgba(0,255,156," + alpha.toFixed(3) + ")";
      tctx.lineWidth = 0.6 + depth * 1.9;
      tctx.shadowColor = "rgba(0,255,156,0.85)";
      tctx.shadowBlur = 6 + depth * 20;
      tctx.stroke();

      // rieles longitudinales hacia el anillo anterior
      if (prev && prev.pts) {
        tctx.beginPath();
        for (var j = 0; j < SIDES; j++) {
          tctx.moveTo(prev.pts[j].x, prev.pts[j].y);
          tctx.lineTo(pts[j].x, pts[j].y);
        }
        tctx.strokeStyle = "rgba(0,229,255," + (alpha * 0.32).toFixed(3) + ")";
        tctx.lineWidth = 0.5 + depth * 0.9;
        tctx.shadowBlur = 4 + depth * 8;
        tctx.stroke();
      }
      prev = { pts: pts };
    }
    tctx.shadowBlur = 0;
  }

  function stepTunnel() {
    scrollBoost *= 0.92;
    var speed = SPEED + scrollBoost;
    spinBase += 0.0009;
    for (var i = 0; i < rings.length; i++) {
      var ring = rings[i];
      ring.z -= speed;
      ring.spin = spinBase + ring.z * 0.045;
      if (ring.z <= 0.35) ring.z += Z_FAR;
    }
  }

  /* ---------- Capa 2: lluvia Matrix ---------- */
  var rain = document.getElementById("bg-rain");
  var rctx = rain.getContext("2d");
  var GLYPHS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓ0123456789<>/\\{}[]#$%&*+=JSDEVWORK";
  var FONT = 15;
  var cols = [];

  function buildRain() {
    var n = Math.floor(W / FONT);
    cols = [];
    for (var i = 0; i < n; i++) {
      cols.push({
        y: Math.random() * -H,
        speed: 0.7 + Math.random() * 1.9,
        bright: Math.random() > 0.86
      });
    }
  }

  function drawRain() {
    // estela: se desvanece en lugar de limpiar
    rctx.fillStyle = "rgba(0,0,0,0.085)";
    rctx.fillRect(0, 0, W, H);
    rctx.font = FONT + "px 'Share Tech Mono', monospace";
    rctx.textBaseline = "top";

    for (var i = 0; i < cols.length; i++) {
      var c = cols[i];
      var ch = GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
      var x = i * FONT;

      rctx.fillStyle = c.bright ? "rgba(190,255,225,0.75)" : "rgba(0,255,156,0.42)";
      rctx.shadowColor = "rgba(0,255,156,0.6)";
      rctx.shadowBlur = c.bright ? 9 : 3;
      rctx.fillText(ch, x, c.y);

      c.y += c.speed * FONT * 0.42;
      if (c.y > H + Math.random() * 260) {
        c.y = -FONT * (2 + Math.random() * 14);
        c.speed = 0.7 + Math.random() * 1.9;
        c.bright = Math.random() > 0.86;
      }
    }
    rctx.shadowBlur = 0;
  }

  /* ---------- Loop ---------- */
  var lastRain = 0;
  var raf = null;
  function loop(ts) {
    stepTunnel();
    drawTunnel();
    if (ts - lastRain > 55) {           // la lluvia va a ~18fps: más orgánica y más barata
      drawRain();
      lastRain = ts;
    }
    raf = requestAnimationFrame(loop);
  }

  /* ---------- Eventos ---------- */
  function onResize() { resize(); initRings(); }
  function onMove(e) {
    mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }
  var lastY = window.scrollY;
  function onScroll() {
    var dy = window.scrollY - lastY;
    lastY = window.scrollY;
    scrollBoost = Math.min(Math.abs(dy) * 0.0016, 0.13);
  }

  window.addEventListener("resize", onResize);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("scroll", onScroll, { passive: true });

  resize();
  initRings();

  if (reduced) {
    // Sin movimiento: un solo fotograma del túnel, sin lluvia.
    drawTunnel();
  } else {
    raf = requestAnimationFrame(loop);
  }

  // cleanup, para que React pueda desmontar el fondo sin dejar listeners sueltos
  return function stop() {
    if (raf) cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("scroll", onScroll);
  };
}
