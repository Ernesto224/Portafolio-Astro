import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG: SiteConfig = {
    title: "Ernesto Vega — Mobile & Desarrollador de software",
    author: "Ernesto Vega Rodriguez",
    description:
        "Soy un desarrollador de software de Cartago, Costa Rica. Me enfoco en escritura de código mantenible, buenas prácticas de arquitectura y colaboración en equipo.",
    lang: "es",
    siteLogo: "/Assets/site-logo.jpg",
    navLinks: [
        { text: "Experiencia", href: "#experience" },
        { text: "Proyectos", href: "#projects" },
        { text: "Sobre Mi", href: "#about" },
    ],
    socialLinks: [
        { text: "LinkedIn", href: "https://www.linkedin.com/in/ernesto224/" },
        { text: "Github", href: "https://github.com/Ernesto224" },
        { text: "Gmail", href: "mailto:ev402648@gmail.com" },
    ],
    socialImage: "/zen-og.png",
    canonicalURL: "https://ernesto-vega-portafolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
    hero: {
        name: "Ernesto Vega",
        specialty: "Desarrollador de software",
        summary:
            "Soy un desarrollador de software de Cartago, Costa Rica. Me enfoco en escritura de código mantenible, buenas prácticas de arquitectura y colaboración en equipo.",
        email: "ev402648@gmail.com",
    },
    experience: [
        {
            company: "CyberProCr",
            position: "Desarrollador FullStack",
            startDate: "Ago 2025",
            endDate: "Dic 2025",
            summary: [
                "Ejecuté el análisis de requerimientos y el desarrollo de módulos CRUD para la gestión de empresas, utilizando metodologías ágiles y herramientas como Trello para garantizar una estructura de backend sólida, escalable y alineada con las necesidades del negocio.",
                "Refactoricé la interfaz de usuario del proyecto Lawai mediante Tailwind CSS, implementando un diseño responsive, soporte para temas claro/oscuro y sistemas de notificaciones dinámicas que mejoraron significativamente la usabilidad y la experiencia del usuario final.",
                "Diseñé e implementé controladores avanzados para la gestión de estados de plantillas y flujos de conversación en tiempo real, optimizando la administración de catálogos y los sistemas de filtrado para agilizar la interacción con los servicios de inteligencia artificial."
            ],
        },
        {
            company: "Universidad de Costa Rica",
            position: "Estudiante de bachillerato",
            startDate: "Sep 2024",
            endDate: "Nov 2024",
            summary: [
                "Lideré y colaboré en el desarrollo utilizando metodologías Scrum y RUP, gestionando tareas a través de Trello.",
                "Desarrollé la estructura de bases de datos e implementé funciones relacionadas.",
                "Implementé secciones del frontend en Angular y desarrollé múltiples servicios RESTful en .NET.",
            ],
        },
        {
            company: "Universidad de Costa Rica",
            position: "Estudiante de bachillerato",
            startDate: "Mar 2025",
            endDate: "Jun 2025",
            summary:
                `En este periodo se trabajo principlamente en un proyecto de Sistema de Hoteleria en el que implementé: seguridad en la aplicación mediante autenticación JWT, 
                 colaboré en el desarrollo de la estructura de bases de datos y 
                 Implementé secciones del frontend en Angular y desarrollé múltiples servicios RESTful en .NET.`,
        },
    ],
    projects: [
        {
            name: "Spotifu Music",
            summary: "A music streaming app that emulates Spotify's core features.",
            linkPreview: "/",
            linkSource: "https://github.com/immois/astro-zen",
            image: "/Projects/spotifu.png",
        },
        {
            name: "Shopp App",
            summary: "An e-commerce platform that replicates Shopify's key features.",
            linkPreview: "/",
            linkSource: "https://github.com/immois/astro-zen",
            image: "/shopify-clon.png",
        },
        {
            name: "ClonTagram",
            summary: "A social network that replicates the features of Instagram",
            linkPreview: "/",
            linkSource: "https://github.com/immois/astro-zen",
            image: "/clone-ig.png",
        },
        {
            name: "ClonTagram",
            summary: "A social network that replicates the features of Instagram",
            linkPreview: "/",
            linkSource: "https://github.com/immois/astro-zen",
            image: "/clone-ig.png",
        },
    ],
    about: {
        description: `Hola, soy Ernesto Vega, desarrollador de software enfocado en la entrega de soluciones eficientes y de alta calidad. 
            Cuento con una sólida formación academica que me ha permitido enfrentar desafíos complejos con una mentalidad de aprendizaje continuo. 
            Mi especialidad es el desarrollo backend, donde diseño arquitecturas robustas y mantenibles para satisfacer las exigencias del 
            software moderno, integrando siempre un interés profundo por la seguridad y los detalles técnicos del sistema. Me caracterizo por 
            mi actitud proactiva, disposición para el trabajo en equipo y compromiso con la excelencia profesional.`,
        image: "/Assets/personal-phote.jpg",
    },
};

// #5755ff