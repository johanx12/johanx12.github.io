import { PROJECTS } from "../data.js";
import Head from "./Head.jsx";
import { IconArrow } from "./Icons.jsx";

export default function Projects({ t, lang }) {
  return (
    <section id="projects">
      <div className="wrap">
        <Head kicker={t.projKicker} title={t.projTitle} lead={t.projLead} />

        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <article className={"proj panel rev" + (p.featured ? " big" : "")} key={p.id}>
              <div className="proj-head">
                <div>
                  <h3>{lang === "es" ? p.title : p.titleEn}</h3>
                  <span className="proj-tag">{p.tag[lang]}</span>
                </div>
                <span className={"chip " + p.status}>
                  {p.status === "done" ? t.statusDone : t.statusWip}
                </span>
              </div>

              <p>{p[lang]}</p>

              <div className="tags">
                {p.tech.map((x) => (
                  <span className="tag" key={x}>{x}</span>
                ))}
              </div>

              {p.repo ? (
                <a className="proj-link" href={p.repo} target="_blank" rel="noopener noreferrer">
                  {t.viewRepo} <IconArrow />
                </a>
              ) : (
                <span className="proj-link off">{t.privateRepo}</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
