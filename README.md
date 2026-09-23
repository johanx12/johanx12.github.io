# johanx12.github.io

Portafolio personal de **Johan Perico** — Desarrollador Full Stack, fundador de J&S DEVWORK.

**Sitio en vivo:** https://johanx12.github.io

Estética cyberpunk en verde neón, con túnel wireframe infinito y lluvia de código Matrix
dibujados en canvas, terminal interactiva y contenido bilingüe ES/EN.

## Stack

- React 18 + Vite 6
- CSS propio (sin framework), variables y `clip-path` para el look cyberpunk
- Canvas 2D puro para el fondo animado — sin librerías 3D
- Despliegue automático a GitHub Pages con GitHub Actions

## Estructura

```
index.html                  punto de entrada, metadatos y canvas de fondo
vite.config.js              configuración de build
src/
  main.jsx                  monta React
  App.jsx                   idioma, estado global y orden de secciones
  data.js                   CONTENIDO: textos, proyectos, stack, contacto
  styles.css                todo el estilo
  lib/
    tunnel.js               fondo animado (túnel + lluvia Matrix)
    utils.js                enlace de WhatsApp y animación de aparición
  components/               Nav, Hero, About, Stack, Projects, Services,
                            Terminal, Contact, Footer, Head, Icons
.github/workflows/deploy.yml  build + deploy automático en cada push a main
```

## Editar el contenido

Todo el texto, los proyectos, el stack y los números de las métricas están en
**`src/data.js`**. No hace falta tocar ningún otro archivo para actualizar el portafolio.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisar el build
```

## Despliegue

Cada `git push` a `main` dispara el workflow de GitHub Actions, que compila el proyecto
y publica `dist/` en GitHub Pages. No hay que subir la carpeta `dist` al repositorio.

Requisito único: en **Settings → Pages**, la opción *Source* debe estar en **GitHub Actions**.

## Terminal interactiva

La sección de terminal acepta: `help`, `about`, `stack`, `projects`, `services`,
`contact`, `github`, `whoami`, `lang`, `date`, `matrix`, `clear`.
Las flechas ↑ / ↓ recorren el historial de comandos.
