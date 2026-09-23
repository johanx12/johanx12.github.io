import { useState, useEffect, useRef } from "react";
import { SITE, STATS } from "../data.js";
import { waLink } from "../lib/utils.js";
import { IconGh, IconArrow } from "./Icons.jsx";

/* ---------- Máquina de escribir ---------- */
function Typewriter({ words, seed }) {
  const [txt, setTxt] = useState("");
  const state = useRef({ i: 0, j: 0, del: false });

  useEffect(() => {
    state.current = { i: 0, j: 0, del: false };
    setTxt("");

    let alive = true;
    let id = null;

    function tick() {
      if (!alive) return;
      const s = state.current;
      const word = words[s.i % words.length];
      s.j += s.del ? -1 : 1;
      setTxt(word.slice(0, s.j));

      let delay = s.del ? 40 : 85;
      if (!s.del && s.j === word.length) {
        delay = 1700;
        s.del = true;
      } else if (s.del && s.j === 0) {
        s.del = false;
        s.i++;
        delay = 320;
      }
      id = setTimeout(tick, delay);
    }

    id = setTimeout(tick, 400);
    return () => {
      alive = false;
      clearTimeout(id);
    };
  }, [seed]);

  return (
    <span>
      {txt}
      <i className="caret">&nbsp;</i>
    </span>
  );
}

/* ---------- Contadores ---------- */
function Stats({ lang }) {
  const [live, setLive] = useState(null);
  const [shown, setShown] = useState(STATS.map(() => 0));
  const ref = useRef(null);
  const done = useRef(false);

  // Dato real desde la API pública de GitHub: nunca un número inventado.
  useEffect(() => {
    let alive = true;
    fetch("https://api.github.com/users/" + SITE.githubUser)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive && d) setLive({ repos: d.public_repos });
      })
      .catch(() => {
        /* sin red: se quedan los números de data.js */
      });
    return () => {
      alive = false;
    };
  }, []);

  const values = STATS.map((s) =>
    live && s.live && live[s.live] != null ? live[s.live] : s.value
  );

  useEffect(() => {
    if (!ref.current) return;
    if (done.current) {
      setShown(values); // el dato real llegó tarde: ajusta sin volver a animar
      return;
    }
    const io = new IntersectionObserver(
      (e) => {
        if (!e[0].isIntersecting || done.current) return;
        done.current = true;
        const start = performance.now();
        (function anim(now) {
          const p = Math.min((now - start) / 1400, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(values.map((v) => Math.round(v * eased)));
          if (p < 1) requestAnimationFrame(anim);
        })(performance.now());
      },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [live]);

  return (
    <div className="stats" ref={ref}>
      {STATS.map((s, i) => (
        <div className="stat" key={i}>
          <b>
            {shown[i]}
            {s.suffix}
          </b>
          <span>{lang === "es" ? s.es : s.en}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Hero ---------- */
export default function Hero({ t, lang }) {
  const words =
    lang === "es"
      ? ["<Full Stack Developer />", "<Python | JavaScript | Java />", "<Linux | Docker | Bash />", "<Software a la medida />", "<J&S DEVWORK />"]
      : ["<Full Stack Developer />", "<Python | JavaScript | Java />", "<Linux | Docker | Bash />", "<Custom software />", "<J&S DEVWORK />"];

  return (
    <header className="hero" id="home">
      <div className="hero-in">
        <div className="badge">
          <i className="dot" />
          {t.status}
        </div>

        <p className="hero-greet">{t.greet}</p>

        <h1 className="hero-name">
          <span className="glitch" data-text={t.name}>{t.name}</span>
        </h1>

        <p className="hero-role">
          <Typewriter words={words} seed={lang} />
        </p>

        <p className="hero-intro">{t.intro}</p>

        <div className="hero-cta">
          <a className="btn" href="#projects">
            {t.ctaProjects} <IconArrow />
          </a>
          <a className="btn wa" href={waLink(lang)} target="_blank" rel="noopener noreferrer">
            {t.ctaWhats}
          </a>
          <a className="btn ghost" href={SITE.github} target="_blank" rel="noopener noreferrer">
            <IconGh /> {t.ctaGithub}
          </a>
        </div>

        <Stats lang={lang} />
      </div>
    </header>
  );
}
