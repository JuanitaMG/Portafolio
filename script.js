const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const languageSwitcher = document.getElementById("language-switcher");

const translations = {
    es: {
        brandName: "Portafolio",
        menuToggleLabel: "Abrir menú",
        navInicio: "Inicio",
        navSobreMi: "Sobre mí",
        navTecnologias: "Tecnologías",
        navProyectos: "Proyectos",
        navContacto: "Contacto",
        heroGreeting: "¡Hola!, soy",
        heroSubtitle: "Estudiante de Ingeniería Informática",
        heroDescription: "Actualmente curso noveno semestre de Ingeniería Informática. Me apasiona el desarrollo de software y la creación de aplicaciones web, enfocándome en desarrollar soluciones funcionales mediante tecnologías modernas, buenas prácticas de programación y aprendizaje continuo.",
        heroBtnGithub: "GitHub",
        heroBtnLinkedin: "LinkedIn",
        heroBtnCv: "Descargar CV",
        aboutTitle: "Sobre mí",
        aboutP1: "Soy estudiante de Ingeniería Informática de noveno semestre, apasionada por el desarrollo de software y el aprendizaje continuo. Busco fortalecer constantemente mis conocimientos y contribuir al desarrollo de soluciones tecnológicas que generen valor.",
        aboutP2: "Durante mi formación académica he desarrollado proyectos web, aplicaciones móviles y videojuegos educativos, tanto de manera individual como en equipo. Estas experiencias me han permitido fortalecer habilidades técnicas, de análisis y trabajo colaborativo.",
        aboutP3: "Me caracterizo por ser una persona responsable, comprometida, con facilidad para adaptarme a nuevos entornos y con una actitud proactiva frente a los retos. Disfruto aprender nuevas tecnologías y seguir creciendo tanto a nivel profesional como personal.",
        cardEducationTitle: "Educación",
        cardEducationText: "Ingeniería Informática",
        cardEducationNote: "9.º semestre",
        cardFocusTitle: "Enfoque",
        cardFocusText: "Desarrollo Web",
        cardFocusNote: "Full Stack",
        cardInterestsTitle: "Intereses",
        cardInterestsText: "Inteligencia Artificial",
        cardInterestsNote: "Desarrollo Web • Aprendizaje continuo",
        cardNowTitle: "Actualmente",
        cardNowText: "Disponible",
        cardNowNote: "Prácticas profesionales y oportunidades laborales",
        skillsTitle: "Tecnologías",
        skillsSubtitle: "Tecnologías y herramientas que he utilizado durante mi formación académica y en el desarrollo de proyectos personales y universitarios.",
        projectsTitle: "Mis proyectos",
        projectsSubtitle: "Estos son algunos de los proyectos que he desarrollado durante mi formación universitaria, aplicando diferentes tecnologías y fortaleciendo mis habilidades en el desarrollo de software.",
        project1ImageAlt: "Sistema de Reserva de Salas",
        project1Title: "Sistema de Reserva de Salas",
        project1Description: "Sistema web desarrollado para optimizar la gestión y reserva de salas mediante una plataforma moderna e intuitiva. Permite administrar usuarios, espacios, disponibilidad y solicitudes de reserva. Fue desarrollado con Laravel, Vue.js, Inertia.js, PostgreSQL y Tailwind CSS siguiendo buenas prácticas de desarrollo.",
        projectRepoBtn: "Ver repositorio",
        project2ImageAlt: "Sistema de Ferretería",
        project2Title: "Sistema de Ferretería",
        project2Description: "Sistema web desarrollado en equipo para gestionar productos, inventario, clientes y usuarios de una ferretería. Participé en el desarrollo de funcionalidades, base de datos e interfaz utilizando ASP.NET MVC, C#, SQL Server y Bootstrap.",
        project3ImageAlt: "Proyecto Unity",
        project3Title: "Videojuego en Unity",
        project3Description: "Videojuego desarrollado en Unity utilizando C#. Se implementaron mecánicas de juego, físicas, animaciones, control del jugador y programación orientada a objetos, fortaleciendo habilidades en el desarrollo de videojuegos.",
        project4ImageAlt: "Proyecto Construct",
        project4Title: "Videojuego en Construct 2",
        project4Description: "Videojuego 2D desarrollado en Construct 2 como proyecto académico. Se implementaron eventos, animaciones, colisiones y mecánicas interactivas, fortaleciendo conocimientos en diseño y desarrollo de videojuegos.",
        contactTitle: "Contáctame",
        contactSubtitle: "Estoy disponible para prácticas profesionales y oportunidades laborales. Si deseas conocer más sobre mi perfil o mis proyectos, no dudes en ponerte en contacto conmigo.",
        contactEmailTitle: "Correo",
        contactPhoneTitle: "Teléfono",
        contactLinkedinTitle: "LinkedIn",
        contactGithubTitle: "GitHub",
        contactLocation: "Manizales, Colombia"
    },
    en: {
        brandName: "Portfolio",
        menuToggleLabel: "Open menu",
        navInicio: "Home",
        navSobreMi: "About",
        navTecnologias: "Technologies",
        navProyectos: "Projects",
        navContacto: "Contact",
        heroGreeting: "Hello, I’m",
        heroSubtitle: "Computer Engineering Student",
        heroDescription: "I am currently in the ninth semester of Computer Engineering. I am passionate about software development and creating web applications, focusing on delivering functional solutions using modern technologies, good programming practices, and continuous learning.",
        heroBtnGithub: "GitHub",
        heroBtnLinkedin: "LinkedIn",
        heroBtnCv: "Download CV",
        aboutTitle: "About",
        aboutP1: "I am a ninth-semester Computer Engineering student passionate about software development and continuous learning. I strive to constantly strengthen my knowledge and contribute to the development of technological solutions that create value.",
        aboutP2: "During my academic training, I have developed web projects, mobile applications, and educational video games both individually and in teams. These experiences have helped me strengthen technical, analytical, and collaborative skills.",
        aboutP3: "I am characterized by being responsible, committed, adaptable to new environments, and proactive when facing challenges. I enjoy learning new technologies and continuing to grow both professionally and personally.",
        cardEducationTitle: "Education",
        cardEducationText: "Computer Engineering",
        cardEducationNote: "9th semester",
        cardFocusTitle: "Focus",
        cardFocusText: "Web Development",
        cardFocusNote: "Full Stack",
        cardInterestsTitle: "Interests",
        cardInterestsText: "Artificial Intelligence",
        cardInterestsNote: "Web Development • Continuous learning",
        cardNowTitle: "Currently",
        cardNowText: "Available",
        cardNowNote: "Professional internships and job opportunities",
        skillsTitle: "Technologies",
        skillsSubtitle: "Technologies and tools I have used during my academic training and while developing personal and university projects.",
        projectsTitle: "My projects",
        projectsSubtitle: "These are some of the projects I have developed during my university training, applying different technologies and strengthening my software development skills.",
        project1ImageAlt: "Room Reservation System",
        project1Title: "Room Reservation System",
        project1Description: "Web system developed to optimize room management and bookings through a modern, intuitive platform. It allows managing users, spaces, availability, and reservation requests. It was built with Laravel, Vue.js, Inertia.js, PostgreSQL, and Tailwind CSS following development best practices.",
        projectRepoBtn: "View repository",
        project2ImageAlt: "Hardware Store System",
        project2Title: "Hardware Store System",
        project2Description: "Web system developed as a team to manage products, inventory, customers and users for a hardware store. I contributed to developing features, database design, and the interface using ASP.NET MVC, C#, SQL Server, and Bootstrap.",
        project3ImageAlt: "Unity Project",
        project3Title: "Unity Game",
        project3Description: "Game developed in Unity using C#. Game mechanics, physics, animations, player control and object-oriented programming were implemented, strengthening my video game development skills.",
        project4ImageAlt: "Construct Project",
        project4Title: "Construct 2 Game",
        project4Description: "2D game developed in Construct 2 as an academic project. Events, animations, collisions, and interactive mechanics were implemented, strengthening knowledge in game design and development.",
        contactTitle: "Contact",
        contactSubtitle: "I am available for internships and job opportunities. If you want to learn more about my profile or projects, do not hesitate to contact me.",
        contactEmailTitle: "Email",
        contactPhoneTitle: "Phone",
        contactLinkedinTitle: "LinkedIn",
        contactGithubTitle: "GitHub",
        contactLocation: "Manizales, Colombia"
    }
};

const getCurrentLanguage = () => {
    const saved = localStorage.getItem("selectedLang");
    return saved === "en" ? "en" : "es";
};

const applyTranslations = (lang) => {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const key = element.dataset.i18n;
        const translation = translations[lang][key];

        if (!translation) {
            return;
        }

        const attrName = element.dataset.i18nAttr || null;

        if (attrName) {
            element.setAttribute(attrName, translation);
        } else {
            element.textContent = translation;
        }
    });

    const buttons = document.querySelectorAll(".lang-btn");
    buttons.forEach((button) => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle("active", isActive);
    });
};

const setLanguage = (lang) => {
    localStorage.setItem("selectedLang", lang);
    applyTranslations(lang);
};

if (languageSwitcher) {
    languageSwitcher.addEventListener("click", (event) => {
        const target = event.target.closest(".lang-btn");
        if (target && target.dataset.lang) {
            setLanguage(target.dataset.lang);
        }
    });
}

if (menuToggle && menu) {
    const updateToggle = () => {
        const isOpen = menu.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    };

    const toggleMenu = () => {
        menu.classList.toggle("active");
        updateToggle();
    };

    menuToggle.addEventListener("click", toggleMenu);
    menuToggle.addEventListener("pointerdown", toggleMenu);

    document.querySelectorAll(".menu a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            updateToggle();
        });
    });

    document.addEventListener("click", (event) => {
        if (window.innerWidth <= 768 && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
            updateToggle();
        }
    });
}

setLanguage(getCurrentLanguage());