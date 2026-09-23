import { SERVICES } from "../data.js";
import { waLink } from "../lib/utils.js";
import Head from "./Head.jsx";
import { SERVICE_ICONS } from "./Icons.jsx";

export default function Services({ t, lang }) {
  return (
    <section id="services">
      <div className="wrap">
        <Head kicker={t.svcKicker} title={t.svcTitle} lead={t.svcLead} />

        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const Ico = SERVICE_ICONS[s.icon];
            return (
              <article className="svc panel rev" key={i}>
                <div className="svc-ico">{Ico ? <Ico /> : null}</div>
                <h3>{s[lang].title}</h3>
                <p>{s[lang].desc}</p>
                <div className="tags">
                  {s.tech.map((x) => (
                    <span className="tag" key={x}>{x}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="rev svc-cta">
          <a className="btn solid" href={waLink(lang)} target="_blank" rel="noopener noreferrer">
            {t.svcCta}
          </a>
        </div>
      </div>
    </section>
  );
}
