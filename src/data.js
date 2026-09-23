/* =========================================================
   data.js  —  CONTENIDO CENTRAL DEL PORTAFOLIO
   Todo el texto, proyectos, stack y enlaces viven aquí.
   Para cambiar el sitio, edita SOLO este archivo.
   ========================================================= */

export const SITE = {
  whatsapp: "573246547748",
  whatsappLabel: "+57 324 654 7748",
  whatsappMsg: {
    es: "Hola Johan, vi tu portafolio y quiero hablar de un proyecto.",
    en: "Hi Johan, I saw your portfolio and I would like to discuss a project."
  },
  github: "https://github.com/johanx12",
  githubUser: "johanx12",
  avatar: "https://avatars.githubusercontent.com/u/109173485?v=4"
};

/* Métricas — EDITA estos números con los tuyos reales.
   El que tiene live:"repos" se sobreescribe con el dato real de la API de GitHub. */
export const STATS = [
  { value: 3,  suffix: "+", es: "Años programando", en: "Years coding" },
  { value: 4,  suffix: "+", es: "Años en Linux",    en: "Years on Linux" },
  { value: 6,  suffix: "",  es: "Repos públicos",   en: "Public repos", live: "repos" },
  { value: 8,  suffix: "+", es: "Proyectos",        en: "Projects" },
  { value: 21, suffix: "+", es: "Tecnologías",      en: "Technologies" }
];

export const STACK = [
  { name: "Python",         cat: "backend",  level: 90 },
  { name: "Java",           cat: "backend",  level: 75 },
  { name: "JavaScript",     cat: "frontend", level: 88 },
  { name: "React",          cat: "frontend", level: 80 },
  { name: "HTML5",          cat: "frontend", level: 95 },
  { name: "CSS3",           cat: "frontend", level: 92 },
  { name: "Flask",          cat: "backend",  level: 78 },
  { name: "REST APIs",      cat: "backend",  level: 80 },
  { name: "MySQL",          cat: "data",     level: 80 },
  { name: "SQLite",         cat: "data",     level: 82 },
  { name: "Git",            cat: "tools",    level: 85 },
  { name: "GitHub",         cat: "tools",    level: 85 },
  { name: "Tkinter",        cat: "tools",    level: 75 },
  { name: "Canvas / WebGL", cat: "frontend", level: 70 },

  /* Linux y DevOps — 4 años de uso diario */
  { name: "Linux",          cat: "sys",      level: 88 },
  { name: "Debian",         cat: "sys",      level: 85 },
  { name: "Kali Linux",     cat: "sys",      level: 82 },
  { name: "Arch Linux",     cat: "sys",      level: 80 },
  { name: "Manjaro",        cat: "sys",      level: 80 },
  { name: "Docker",         cat: "sys",      level: 78 },
  { name: "Bash",           cat: "sys",      level: 80 }
];

export const CATS = {
  all:      { es: "Todas",        en: "All" },
  frontend: { es: "Frontend",     en: "Frontend" },
  backend:  { es: "Backend",      en: "Backend" },
  data:     { es: "Datos",        en: "Data" },
  sys:      { es: "Linux & DevOps", en: "Linux & DevOps" },
  tools:    { es: "Herramientas", en: "Tools" }
};

/* Proyectos. featured:true => tarjeta grande.
   repo: null cuando es privado o local. */
export const PROJECTS = [
  {
    id: "gestion-documental",
    featured: true,
    title: "Sistema de Gestión Documental",
    titleEn: "Document Management System",
    tag: { es: "Plataforma universitaria", en: "University platform" },
    es: "Sistema universitario de gestión y análisis documental: carga, clasificación, búsqueda y trazabilidad de documentos académicos.",
    en: "University system for document management and analysis: upload, classification, search and traceability of academic documents.",
    tech: ["Python", "SQL", "REST API"],
    repo: "https://github.com/johanx12/proyecto_gestion_documental",
    status: "done"
  },
  {
    id: "nexora",
    featured: true,
    title: "Nexora",
    titleEn: "Nexora",
    tag: { es: "Proyecto en desarrollo", en: "Work in progress" },
    es: "Proyecto Nexora — plataforma en construcción. (Descríbelo en data.js cuando quieras detallarlo.)",
    en: "Nexora project — platform under construction. (Describe it in data.js whenever you want.)",
    tech: ["Python", "JavaScript"],
    repo: "https://github.com/johanx12/PROYECTO_NEXORA",
    status: "wip"
  },
  {
    id: "jsdevwork",
    featured: true,
    title: "J&S DEVWORK",
    titleEn: "J&S DEVWORK",
    tag: { es: "Agencia propia", en: "My own agency" },
    es: "Sitio y embudo comercial de mi agencia: páginas web y software a la medida en Colombia. Estética espacial, precios públicos y todo el contacto directo a WhatsApp.",
    en: "Website and sales funnel for my agency: custom websites and software in Colombia. Space aesthetic, public pricing and every CTA going straight to WhatsApp.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    repo: null,
    status: "done"
  },
  {
    id: "barbermanager",
    title: "BarberManager",
    titleEn: "BarberManager",
    tag: { es: "Gestión de negocio", en: "Business management" },
    es: "Sistema de gestión para barberías: agenda, clientes y control de servicios.",
    en: "Management system for barbershops: scheduling, clients and service tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/johanx12/BarberManager",
    status: "done"
  },
  {
    id: "fincas",
    title: "App Fincas Cafeteras",
    titleEn: "Coffee Farm App",
    tag: { es: "Escritorio", en: "Desktop" },
    es: "Programa de cosecha y pagos para fincas cafeteras: registro por kilos, semana de lunes a domingo, liquidación por recolector y tema oscuro.",
    en: "Harvest and payroll program for coffee farms: kilo-based logging, Monday-to-Sunday weeks, per-picker settlement and dark theme.",
    tech: ["Python", "SQLite", "Tkinter"],
    repo: null,
    status: "done"
  },
  {
    id: "disciplina",
    title: "App de Ejecución y Disciplina",
    titleEn: "Execution & Discipline App",
    tag: { es: "Escritorio", en: "Desktop" },
    es: "App de escritorio para ejecutar el día sin negociar con uno mismo: alcance cerrado, cero funciones de adorno.",
    en: "Desktop app to execute the day without negotiating with yourself: closed scope, zero decorative features.",
    tech: ["Python", "SQLite"],
    repo: null,
    status: "wip"
  },
  {
    id: "portal",
    title: "Portal Web",
    titleEn: "Web Portal",
    tag: { es: "Backend", en: "Backend" },
    es: "Portal web en Python: estructura de rutas, plantillas y capa de datos.",
    en: "Python web portal: routing structure, templates and data layer.",
    tech: ["Python"],
    repo: "https://github.com/johanx12/proyecto_portal",
    status: "done"
  },
  {
    id: "login-java",
    title: "Módulo de Autenticación",
    titleEn: "Authentication Module",
    tag: { es: "Java", en: "Java" },
    es: "Módulo de login en Java: validación de credenciales y control de acceso.",
    en: "Java login module: credential validation and access control.",
    tech: ["Java"],
    repo: "https://github.com/johanx12/login",
    status: "done"
  }
];

export const SERVICES = [
  {
    icon: "web",
    es: { title: "Páginas web a la medida", desc: "Landing pages, sitios corporativos y portafolios rápidos, responsive y listos para vender." },
    en: { title: "Custom websites", desc: "Landing pages, corporate sites and portfolios: fast, responsive and ready to sell." },
    tech: ["HTML5", "CSS3", "JavaScript", "React"]
  },
  {
    icon: "app",
    es: { title: "Software de escritorio", desc: "Aplicaciones internas para tu negocio: inventarios, nóminas, cosechas, agenda. Funcionan sin internet." },
    en: { title: "Desktop software", desc: "Internal business apps: inventory, payroll, harvest, scheduling. They work offline." },
    tech: ["Python", "SQLite", "Tkinter"]
  },
  {
    icon: "db",
    es: { title: "Bases de datos y reportes", desc: "Modelado, migración y consultas. Que tus datos respondan preguntas, no que se acumulen." },
    en: { title: "Databases & reporting", desc: "Modeling, migration and querying. Make your data answer questions instead of piling up." },
    tech: ["MySQL", "SQLite", "SQL"]
  },
  {
    icon: "api",
    es: { title: "APIs e integraciones", desc: "APIs REST, automatizaciones y conexión entre los sistemas que ya usas." },
    en: { title: "APIs & integrations", desc: "REST APIs, automations and glue between the systems you already use." },
    tech: ["Python", "Flask", "REST"]
  },
  {
    icon: "server",
    es: { title: "Servidores Linux y Docker", desc: "Montaje y mantenimiento de servidores Linux, contenedores Docker y despliegues que no se caen el lunes." },
    en: { title: "Linux servers & Docker", desc: "Setup and upkeep of Linux servers, Docker containers and deployments that do not fall over on Monday." },
    tech: ["Linux", "Debian", "Docker", "Bash"]
  }
];

export const I18N = {
  es: {
    navHome: "Inicio", navAbout: "Sobre mí", navStack: "Stack", navProjects: "Proyectos",
    navServices: "Servicios", navContact: "Contacto",
    status: "Disponible para proyectos",
    greet: "Hola, soy",
    name: "Johan Perico",
    role: "<Full Stack Developer />",
    intro: "Desarrollador colombiano y fundador de J&S DEVWORK. Construyo páginas web y software a la medida: sistemas que las personas usan todos los días, no demos bonitas.",
    ctaProjects: "Ver proyectos", ctaWhats: "Escríbeme por WhatsApp", ctaGithub: "GitHub",
    aboutKicker: "CONÓCEME", aboutTitle: "Sobre mí",
    aboutLead: "Código que se sostiene solo y clientes que vuelven.",
    aboutP1: "Soy Johan Perico, desarrollador full stack colombiano. Trabajo con Python para lógica y datos, JavaScript para interfaces, y Java cuando el proyecto lo pide. Lo que construyo termina en manos de alguien que lo usa a diario.",
    aboutP3: "Llevo 4 años trabajando sobre Linux como sistema principal: Debian y Kali para seguridad y servidores, Arch y Manjaro en el día a día. De ahí viene mi soltura con la terminal, Bash y Docker para levantar entornos que se comportan igual en mi máquina y en producción.",
    aboutP2: "Fundé J&S DEVWORK para vender páginas web y software a la medida en Colombia. Ahí aprendí lo que ningún curso enseña: un sistema vale por el problema que resuelve, no por las tecnologías que lleva encima.",
    pill1t: "Filosofía", pill1d: "Alcance cerrado y código legible. Nada de funciones que nadie pidió.",
    pill2t: "Objetivo", pill2d: "Construir software que un negocio pueda operar sin mí al lado.",
    stackKicker: "ARSENAL", stackTitle: "Stack tecnológico",
    stackLead: "Herramientas que uso en proyectos reales, no logos de adorno.",
    projKicker: "PORTAFOLIO", projTitle: "Proyectos",
    projLead: "Sistemas propios, trabajos de cliente y proyectos académicos.",
    viewRepo: "Ver repo", privateRepo: "Repo privado",
    svcKicker: "SERVICIOS", svcTitle: "¿En qué puedo ayudarte?",
    svcLead: "Lo que hago para clientes a través de J&S DEVWORK.",
    svcCta: "Cotizar por WhatsApp",
    contactKicker: "CONTACTO", contactTitle: "Hablemos de tu proyecto",
    contactLead: "Cuéntame qué necesitas y te respondo con alcance, tiempo y precio. Sin vueltas.",
    contactBtn: "Abrir WhatsApp",
    termHint: "Escribe 'help' y pulsa Enter",
    statusDone: "Completado", statusWip: "En progreso",
    footer: "Construido con React, canvas y mucho verde neón.",
    rights: "Todos los derechos reservados."
  },
  en: {
    navHome: "Home", navAbout: "About", navStack: "Stack", navProjects: "Projects",
    navServices: "Services", navContact: "Contact",
    status: "Available for projects",
    greet: "Hi, I am",
    name: "Johan Perico",
    role: "<Full Stack Developer />",
    intro: "Colombian developer and founder of J&S DEVWORK. I build custom websites and software: systems people actually use every day, not pretty demos.",
    ctaProjects: "View projects", ctaWhats: "Message me on WhatsApp", ctaGithub: "GitHub",
    aboutKicker: "ABOUT ME", aboutTitle: "About me",
    aboutLead: "Code that holds up on its own and clients who come back.",
    aboutP1: "I am Johan Perico, a Colombian full stack developer. I use Python for logic and data, JavaScript for interfaces, and Java when the project calls for it. What I build ends up in the hands of someone who uses it daily.",
    aboutP3: "I have been running Linux as my main system for 4 years: Debian and Kali for security and servers, Arch and Manjaro day to day. That is where my comfort with the terminal, Bash and Docker comes from — environments that behave the same on my machine and in production.",
    aboutP2: "I founded J&S DEVWORK to sell custom websites and software in Colombia. That taught me what no course does: a system is worth the problem it solves, not the stack it carries.",
    pill1t: "Philosophy", pill1d: "Closed scope, readable code. No features nobody asked for.",
    pill2t: "Goal", pill2d: "Build software a business can run without me next to it.",
    stackKicker: "ARSENAL", stackTitle: "Tech stack",
    stackLead: "Tools I use on real projects, not decorative logos.",
    projKicker: "PORTFOLIO", projTitle: "Projects",
    projLead: "My own systems, client work and academic projects.",
    viewRepo: "View repo", privateRepo: "Private repo",
    svcKicker: "SERVICES", svcTitle: "How can I help you?",
    svcLead: "What I deliver for clients through J&S DEVWORK.",
    svcCta: "Get a quote on WhatsApp",
    contactKicker: "CONTACT", contactTitle: "Let us talk about your project",
    contactLead: "Tell me what you need and I will reply with scope, timeline and price. No runaround.",
    contactBtn: "Open WhatsApp",
    termHint: "Type 'help' and hit Enter",
    statusDone: "Completed", statusWip: "In progress",
    footer: "Built with React, canvas and a lot of neon green.",
    rights: "All rights reserved."
  }
};
