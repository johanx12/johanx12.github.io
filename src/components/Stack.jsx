import { useState, useEffect, useRef } from "react";
import { STACK, CATS } from "../data.js";
import Head from "./Head.jsx";

export default function Stack({ t, lang }) {
  const [cat, setCat] = useState("all");
  const [grown, setGrown] = useState(false);
  const ref = useRef(null);

  const list = STACK.filter((s) => cat === "all" || s.cat === cat);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setGrown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="stack">
      <div className="wrap">
        <Head kicker={t.stackKicker} title={t.stackTitle} lead={t.stackLead} />

        <div className="filters rev">
          {Object.keys(CATS).map((k) => (
            <button key={k} className={cat === k ? "on" : ""} onClick={() => setCat(k)}>
              {CATS[k][lang]}
            </button>
          ))}
        </div>

        <div className="stack-grid" ref={ref}>
          {list.map((s) => (
            <div className="tech panel rev in" key={s.name}>
              <div className="tech-top">
                <span className="tech-name">{s.name}</span>
                <span className="tech-lvl">{s.level}%</span>
              </div>
              <div className="bar">
                <i style={{ width: grown ? s.level + "%" : "0%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
