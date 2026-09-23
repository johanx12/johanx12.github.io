import { useState, useEffect, useRef, useCallback } from "react";
import { SITE, STACK, PROJECTS, SERVICES } from "../data.js";
import { waLink } from "../lib/utils.js";

/** Terminal falsa pero funcional: navega el sitio por comandos. */
export default function Terminal({ t, lang, setLang }) {
  const es = lang === "es";
  const [lines, setLines] = useState([]);
  const [val, setVal] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const hist = useRef({ items: [], idx: -1 });

  useEffect(() => {
    setLines(
      es
        ? [
            { c: "t-ok", s: "JOHAN_PERICO // TERMINAL v1.0  —  sesión iniciada" },
            { c: "t-out", s: "Conectado a johanx12.github.io :: acceso público concedido" },
            { c: "t-cy", s: "Escribe 'help' para ver los comandos disponibles." },
          ]
        : [
            { c: "t-ok", s: "JOHAN_PERICO // TERMINAL v1.0  —  session started" },
            { c: "t-out", s: "Connected to johanx12.github.io :: public access granted" },
            { c: "t-cy", s: "Type 'help' to list the available commands." },
          ]
    );
  }, [lang]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const push = useCallback((arr) => setLines((prev) => prev.concat(arr)), []);

  function goto(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function run(raw) {
    const cmd = raw.trim();
    if (!cmd) return;

    hist.current.items.push(cmd);
    hist.current.idx = hist.current.items.length;
    push([{ c: "t-in", s: "visitante@johanx12:~$ " + cmd }]);

    const parts = cmd.toLowerCase().split(/\s+/);
    const base = parts[0];
    let out = [];

    switch (base) {
      case "help":
        out = (es
          ? [
              "Comandos disponibles:",
              "  about      — quién soy",
              "  stack      — tecnologías que manejo",
              "  projects   — lista de proyectos",
              "  services   — qué ofrezco",
              "  contact    — cómo escribirme",
              "  github     — abrir mi perfil",
              "  whoami     — tu sesión",
              "  lang       — cambiar idioma ES/EN",
              "  date       — fecha del sistema",
              "  matrix     — ...",
              "  clear      — limpiar pantalla",
            ]
          : [
              "Available commands:",
              "  about      — who I am",
              "  stack      — technologies I work with",
              "  projects   — project list",
              "  services   — what I offer",
              "  contact    — how to reach me",
              "  github     — open my profile",
              "  whoami     — your session",
              "  lang       — switch ES/EN",
              "  date       — system date",
              "  matrix     — ...",
              "  clear      — clear screen",
            ]
        ).map((s) => ({ c: "t-out", s }));
        break;

      case "about":
        out = [
          { c: "t-out", s: t.aboutP1 },
          { c: "t-cy", s: "» " + t.aboutLead },
        ];
        goto("about");
        break;

      case "stack":
        out = [{ c: "t-ok", s: STACK.map((s) => s.name).join("  ·  ") }];
        goto("stack");
        break;

      case "projects":
        out = PROJECTS.map((p) => ({
          c: "t-out",
          s:
            "[" + (p.status === "done" ? "OK " : "WIP") + "] " +
            (es ? p.title : p.titleEn) + "  —  " + p.tech.join(", "),
        }));
        goto("projects");
        break;

      case "services":
        out = SERVICES.map((s) => ({ c: "t-out", s: "› " + s[lang].title + ": " + s[lang].desc }));
        goto("services");
        break;

      case "contact":
        out = [
          { c: "t-ok", s: "WhatsApp: " + SITE.whatsappLabel },
          { c: "t-ok", s: "GitHub:   " + SITE.github },
          { c: "t-cy", s: es ? "Abriendo WhatsApp..." : "Opening WhatsApp..." },
        ];
        goto("contact");
        window.open(waLink(lang), "_blank", "noopener");
        break;

      case "github":
        out = [{ c: "t-cy", s: (es ? "Abriendo " : "Opening ") + SITE.github }];
        window.open(SITE.github, "_blank", "noopener");
        break;

      case "whoami":
        out = [
          { c: "t-out", s: es ? "visitante — sesión anónima de solo lectura" : "visitor — anonymous read-only session" },
          { c: "t-out", s: "user-agent: " + navigator.userAgent.slice(0, 68) + "..." },
          { c: "t-out", s: (es ? "idioma del navegador: " : "browser language: ") + navigator.language },
        ];
        break;

      case "lang": {
        const next = parts[1] === "en" || parts[1] === "es" ? parts[1] : es ? "en" : "es";
        setLang(next);
        out = [{ c: "t-ok", s: "lang → " + next.toUpperCase() }];
        break;
      }

      case "date":
        out = [{ c: "t-out", s: new Date().toString() }];
        break;

      case "matrix":
        out = [{
          c: "t-ok",
          s: es
            ? "La lluvia lleva rato cayendo detrás de ti. Mira el fondo."
            : "The rain has been falling behind you this whole time. Look at the background.",
        }];
        break;

      case "sudo":
        out = [{
          c: "t-err",
          s: es
            ? "visitante no está en el archivo sudoers. Este incidente será reportado."
            : "visitor is not in the sudoers file. This incident will be reported.",
        }];
        break;

      case "echo":
        out = [{ c: "t-out", s: cmd.slice(5) }];
        break;

      case "clear":
        setLines([]);
        return;

      case "exit":
        out = [{
          c: "t-err",
          s: es ? "No puedes salir. El portafolio aún no termina contigo." : "You cannot exit. The portfolio is not done with you.",
        }];
        break;

      default:
        out = [{
          c: "t-err",
          s: (es ? "comando no encontrado: " : "command not found: ") + base + (es ? " — prueba 'help'" : " — try 'help'"),
        }];
    }

    push(out);
  }

  function onKey(e) {
    if (e.key === "Enter") {
      run(val);
      setVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const h = hist.current;
      if (h.idx > 0) {
        h.idx--;
        setVal(h.items[h.idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const h = hist.current;
      if (h.idx < h.items.length - 1) {
        h.idx++;
        setVal(h.items[h.idx]);
      } else {
        h.idx = h.items.length;
        setVal("");
      }
    }
  }

  return (
    <section id="terminal" className="term-section">
      <div className="wrap">
        <div className="term rev" onClick={() => inputRef.current && inputRef.current.focus()}>
          <div className="term-bar">
            <i /><i /><i />
            <span>visitante@johanx12: ~/portafolio</span>
          </div>

          <div className="term-body" ref={bodyRef}>
            {lines.map((l, i) => (
              <p className={l.c} key={i}>{l.s}</p>
            ))}
            <div className="term-line">
              <span className="ps">visitante@johanx12:~$</span>
              <input
                ref={inputRef}
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onKeyDown={onKey}
                spellCheck="false"
                autoComplete="off"
                aria-label="terminal"
              />
            </div>
          </div>
        </div>
        <p className="term-hint">{t.termHint}</p>
      </div>
    </section>
  );
}
