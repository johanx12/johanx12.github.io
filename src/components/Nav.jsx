import { useState, useEffect } from "react";

export default function Nav({ t, lang, setLang }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    function onScroll() {
      setSolid(window.scrollY > 40);
      const ids = ["home", "about", "stack", "projects", "services", "contact"];
      let cur = "home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) cur = id;
      });
      setActive(cur);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["home", t.navHome],
    ["about", t.navAbout],
    ["stack", t.navStack],
    ["projects", t.navProjects],
    ["services", t.navServices],
    ["contact", t.navContact],
  ];

  return (
    <nav className={"nav" + (solid ? " solid" : "")}>
      <div className="nav-in">
        <a className="logo" href="#home" onClick={() => setOpen(false)}>
          JOHAN<span>_</span>PERICO<span>/&gt;</span>
        </a>

        <div className={"nav-links" + (open ? " open" : "")}>
          {links.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <div className="lang">
            <button className={lang === "es" ? "on" : ""} onClick={() => setLang("es")}>ES</button>
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <button className="burger" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}
