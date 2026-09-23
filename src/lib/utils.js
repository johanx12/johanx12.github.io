import { useEffect } from "react";
import { SITE } from "../data.js";

/** Enlace a WhatsApp con el mensaje ya redactado en el idioma activo. */
export function waLink(lang) {
  return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(SITE.whatsappMsg[lang]);
}

/** Revela con animación cada elemento .rev cuando entra en pantalla. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rev:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
}
