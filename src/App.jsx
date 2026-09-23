import { useState, useEffect } from "react";
import { I18N } from "./data.js";
import { useReveal, waLink } from "./lib/utils.js";
import { initTunnel } from "./lib/tunnel.js";

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Stack from "./components/Stack.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Terminal from "./components/Terminal.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { IconWa } from "./components/Icons.jsx";

function detectLang() {
  try {
    const saved = localStorage.getItem("jp_lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (e) {
    /* storage bloqueado (modo privado): seguimos con el idioma del navegador */
  }
  return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
}

export default function App() {
  const [lang, setLang] = useState(detectLang);
  const t = I18N[lang];

  useReveal();

  // Fondo animado: se monta una vez y se limpia solo.
  useEffect(() => initTunnel(), []);

  useEffect(() => {
    try {
      localStorage.setItem("jp_lang", lang);
    } catch (e) {
      /* noop */
    }
    document.documentElement.lang = lang;
    document.title =
      lang === "es"
        ? "Johan Perico | Desarrollador Full Stack — J&S DEVWORK"
        : "Johan Perico | Full Stack Developer — J&S DEVWORK";
  }, [lang]);

  // Quita la pantalla de arranque cuando React ya pintó, pero nunca antes de
  // MIN_BOOT: si el sitio carga muy rápido, la secuencia se vería como un parpadeo.
  useEffect(() => {
    const b = document.getElementById("boot");
    if (!b) return;
    const MIN_BOOT = 1400;
    const wait = Math.max(0, MIN_BOOT - performance.now());
    const t1 = setTimeout(() => b.classList.add("gone"), wait);
    const t2 = setTimeout(() => b.remove(), wait + 650);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="shell">
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} lang={lang} />
      <About t={t} lang={lang} />
      <Stack t={t} lang={lang} />
      <Projects t={t} lang={lang} />
      <Services t={t} lang={lang} />
      <Terminal t={t} lang={lang} setLang={setLang} />
      <Contact t={t} lang={lang} />
      <Footer t={t} lang={lang} />

      <a
        className="fab"
        href={waLink(lang)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <IconWa />
      </a>
    </div>
  );
}
