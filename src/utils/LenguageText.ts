export const getLenguageObject = (lenguageCode: string = 'es') => {

    const lenguageObject = {
        lenguages: [
            {
                Code: "es",
                navbar: {
                    sectionTitles: [
                        { title: "Inicio" },
                        { title: "Proyectos" },
                        { title: "Contacto" },
                    ]
                },
                home: {
                    h4: "Hola, soy Ernesto",
                    h1: "Desarrollador de software",
                    p: `Me destaco por mi disposicion para trabajar en equipo, mi actitud proactiva y
                    mi motivacion constante por aprender nuevas tecnologıas. Comprometido con el crecimiento profesional y con aportar
                    valor mediante la investigacion.`
                },
                about: {
                    h3: "Mas sobre mi",
                    h2: "Sobre",
                    accordionItemsText: [
                        {
                            icon: "icon-[material-symbols-light--web]",
                            title: "Desarrollo Web",
                            text: `Me dedico principalmente el desarrollo de sistemas basados en la web, avarcando desde la arquitectura del sistema 
                            hasta el despligue en produccion.`,
                        },
                        {
                            icon: "icon-[tabler--social]",
                            title: "Habilidades Blandas",
                            text: `Entre las habilidades que he desarrollado se encuentran: Liderazgo, Pensamiento critico, Proactividad, Escucha activa y Etica profesional.`
                        },
                        {
                            icon: "icon-[material-symbols--list-alt-outline-rounded]",
                            title: "Experiencia",
                            text: `Lidere y colabore en el desarrollo utilizando metodologias Scrum y RUP, gestionando tareas a traves de Trello.
                            Desarrolle la estructura de bases de datos e implemente funciones relacionadas. Trabaje en el desarrolle multiples 
                            servicios RESTful en diversas tecnologias.`,
                        },
                    ]
                },
                projects: {
                    h3: "Mi Trabajo",
                    h2: "Proyectos",
                    cardItems: [
                        {
                            title: 'God Of War Weapon API',
                            state: 'En Produccion',
                            imageSrc: 'https://res.cloudinary.com/dks1ifnxa/image/upload/v1764623797/god-of-war-weapon-api-projects-cover_xz5drb.jpg',
                            deployHref: 'https://god-of-war-weapon-api.vercel.app/api/swagger/',
                            gitHref: 'https://github.com/Ernesto224/God-Of-War-Weapon-API',
                        },
                        {
                            title: 'God Of War Weapon API',
                            state: 'En Produccion',
                            imageSrc: 'https://res.cloudinary.com/dks1ifnxa/image/upload/v1764623797/god-of-war-weapon-api-projects-cover_xz5drb.jpg',
                            deployHref: 'https://god-of-war-weapon-api.vercel.app/api/swagger/',
                            gitHref: 'https://github.com/Ernesto224/God-Of-War-Weapon-API',
                        },
                        {
                            title: 'God Of War Weapon API',
                            state: 'En Produccion',
                            imageSrc: 'https://res.cloudinary.com/dks1ifnxa/image/upload/v1764623797/god-of-war-weapon-api-projects-cover_xz5drb.jpg',
                            deployHref: 'https://god-of-war-weapon-api.vercel.app/api/swagger/',
                            gitHref: 'https://github.com/Ernesto224/God-Of-War-Weapon-API',
                        },
                        {
                            title: 'God Of War Weapon API',
                            state: 'En Produccion',
                            imageSrc: 'https://res.cloudinary.com/dks1ifnxa/image/upload/v1764623797/god-of-war-weapon-api-projects-cover_xz5drb.jpg',
                            deployHref: 'https://god-of-war-weapon-api.vercel.app/api/swagger/',
                            gitHref: 'https://github.com/Ernesto224/God-Of-War-Weapon-API',
                        }
                    ],
                    endButtom: "Mas proyectos en"
                },
                contact: {
                    h3: "Empezemos a hablar",
                    h2: "Contactame",
                    p: `Si tienes alguna pregunta o una propuesta de un proyecto, sientete libre de contactarme, y en cuanto sea posible te contactare.`,
                },
                footer: {
                    strong: "Ernesto Vega Rodriguez",
                    p: "Copyright © 2025. Diseñado y desarrollado por"
                }
            },
        ]
    };

    return lenguageObject.lenguages.find(item => (item.Code === lenguageCode));
};