import { SITE } from "../data.js";
import { waLink } from "../lib/utils.js";
import { IconGh } from "./Icons.jsx";

export default function Contact({ t, lang }) {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box rev">
          <div className="kicker centered">{t.contactKicker}</div>
          <h2 className="h2">{t.contactTitle}</h2>
          <p className="lead">{t.contactLead}</p>

          <div className="contact-actions">
            <a className="btn solid" href={waLink(lang)} target="_blank" rel="noopener noreferrer">
              {t.contactBtn}
            </a>
            <a className="btn ghost" href={SITE.github} target="_blank" rel="noopener noreferrer">
              <IconGh /> GitHub
            </a>
          </div>

          <p className="wa-num">{SITE.whatsappLabel}</p>
        </div>
      </div>
    </section>
  );
}
