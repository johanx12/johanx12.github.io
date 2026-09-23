import { SITE } from "../data.js";

export default function Footer({ t }) {
  return (
    <footer className="foot">
      <div className="wrap">
        <p>© {new Date().getFullYear()} Johan Perico · J&amp;S DEVWORK — {t.rights}</p>
        <p className="foot-2">
          {t.footer} ·{" "}
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            @{SITE.githubUser}
          </a>
        </p>
      </div>
    </footer>
  );
}
