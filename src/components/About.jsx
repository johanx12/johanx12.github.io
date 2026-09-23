import { SITE } from "../data.js";
import Head from "./Head.jsx";

export default function About({ t }) {
  return (
    <section id="about">
      <div className="wrap">
        <Head kicker={t.aboutKicker} title={t.aboutTitle} />

        <div className="about-grid">
          <div className="avatar-box panel rev">
            <img src={SITE.avatar} alt="Johan Perico" loading="lazy" />
            <div className="frame" />
            <div className="avatar-tag">@{SITE.githubUser}</div>
          </div>

          <div className="rev">
            <p className="about-lead">{t.aboutLead}</p>
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>

            <div className="pills">
              <div className="pill panel">
                <h4>{t.pill1t}</h4>
                <p>{t.pill1d}</p>
              </div>
              <div className="pill panel">
                <h4>{t.pill2t}</h4>
                <p>{t.pill2d}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
