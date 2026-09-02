// ============================================================
// VALADAL — script.js
// Archivo compartido por todas las páginas.
// Idioma + tema + navbar + animaciones + filtros + formulario.
// ============================================================


// ============================================================
// 1. LANGUAGE SYSTEM
// ============================================================

const translations = {

  es: {
    "nav.home": "Inicio",
    "nav.repair": "Reparación",
    "nav.digital": "Digital",
    "nav.work": "Proyectos",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.quote": "Cotizar",

    "theme.toggle": "Modo oscuro",

    "hero.pill": "Reparación y Soluciones Digitales",
    "hero.title1": "Tecnología para el",
    "hero.title2": "mundo real.",
    "hero.subtitle":
      "Soluciones técnicas y digitales diseñadas para lo que viene — desde reparar los dispositivos de los que dependes hasta construir los sistemas que tu empresa necesita.",
    "hero.explore": "Explorar servicios",
    "hero.contact": "Contactar a Valadal",
    "hero.free": "Diagnóstico gratuito",
    "hero.certified": "Reparación profesional",
    "hero.turnaround": "Entrega en 48 h",

    "wwd.eyebrow": "Lo que hacemos",
    "wwd.title": "Reparamos. Construimos. Creamos.",
    "wwd.text":
      "Valadal comenzó como un taller de reparación, pero se convirtió en algo más grande. Hoy combinamos reparación técnica con diseño y desarrollo de soluciones digitales — para que la tecnología que ya tienes funcione mejor y la tecnología que tu empresa necesita se construya correctamente desde el principio.",

    "repair.eyebrow": "Reparación",
    "repair.title": "Mantén tu tecnología funcionando.",
    "repair.computers": "Computadoras",
    "repair.computersDesc":
      "Diagnóstico, reparación, mantenimiento y actualizaciones para todo tipo de computadoras.",
    "repair.smartphones": "Smartphones",
    "repair.smartphonesDesc":
      "Diagnóstico, reparación y mantenimiento para que tu teléfono vuelva a funcionar correctamente.",
    "repair.gaming": "Gaming",
    "repair.gamingDesc":
      "Reparación de HDMI, solución de drift, limpieza y diagnóstico completo de consolas.",
    "repair.button": "Explorar reparación →",

    "digital.eyebrow": "Soluciones Digitales",
    "digital.title": "Construye lo que viene.",
    "digital.text":
      "Sitios web, sistemas personalizados y automatizaciones diseñadas para ayudar a tu empresa a trabajar de forma más inteligente — construidos con el mismo cuidado que ponemos en cada reparación.",
    "digital.web": "Web",
    "digital.webDesc":
      "Sitios web, landing pages y páginas empresariales.",
    "digital.systems": "Sistemas",
    "digital.systemsDesc":
      "Herramientas personalizadas, sistemas internos y utilidades empresariales.",
    "digital.automation": "Automatización",
    "digital.automationDesc":
      "Flujos de trabajo, automatización y procesos digitales.",
    "digital.button": "Explorar Digital →",

    "values.eyebrow": "Por qué Valadal",
    "values.title": "Construidos sobre los mismos cuatro principios, siempre.",
    "values.precision": "Precisión",
    "values.precisionDesc":
      "Trabajo técnico cuidadoso y metódico — nada se hace con prisas.",
    "values.transparency": "Transparencia",
    "values.transparencyDesc":
      "Comunicación clara sobre qué ocurre y qué se necesita para solucionarlo.",
    "values.quality": "Calidad",
    "values.qualityDesc":
      "Soluciones construidas para durar, no solamente para pasar una inspección.",
    "values.innovation": "Innovación",
    "values.innovationDesc":
      "Tecnología con la mirada puesta en hacia dónde se dirige el mundo.",

    "work.eyebrow": "Proyectos destacados",
    "work.title": "Trabajo real. Soluciones reales.",
    "work.text":
      "Estamos documentando cada proyecto a medida que lo completamos. Esto es el tipo de trabajo que encontrarás en nuestro portafolio completo.",
    "work.gaming": "Gaming",
    "work.computers": "Computadoras",
    "work.smartphones": "Smartphones",
    "work.digital": "Digital",
    "work.button": "Ver todos los proyectos →",

    "about.eyebrow": "Nosotros",
    "about.title": "La tecnología debería trabajar para ti.",
    "about.text":
      "Valadal es una empresa tecnológica construida sobre dos divisiones — reparación y soluciones digitales — y una idea: entender el problema, encontrar la solución y hacer que funcione.",
    "about.button": "Conoce más →",

    "cta.title": "Hagámoslo funcionar.",
    "cta.button": "Cotizar →",

    "footer.tagline": "Tecnología para el mundo real.",
    "footer.company": "Empresa",
    "footer.contact": "Contáctanos",
    "footer.location": "Guadalajara, Jalisco, México"
  },

  en: {
    "nav.home": "Home",
    "nav.repair": "Repair",
    "nav.digital": "Digital",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.quote": "Get a Quote",

    "theme.toggle": "Dark mode",

    "hero.pill": "Repair & Digital Solutions",
    "hero.title1": "Technology for the",
    "hero.title2": "real world.",
    "hero.subtitle":
      "Technical and digital solutions built for what's next — from repairing the devices you rely on, to building the systems your business needs.",
    "hero.explore": "Explore Services",
    "hero.contact": "Contact Valadal",
    "hero.free": "Free diagnosis",
    "hero.certified": "Professional repair",
    "hero.turnaround": "48h turnaround",

    "wwd.eyebrow": "What we do",
    "wwd.title": "We repair. We build. We create.",
    "wwd.text":
      "Valadal started as a repair workshop, but it's grown into something bigger. Today we combine hands-on technical repair with digital solutions design and development — so the technology you already own works better, and the technology your business needs gets built right the first time.",

    "repair.eyebrow": "Repair",
    "repair.title": "Keep your tech alive.",
    "repair.computers": "Computers",
    "repair.computersDesc":
      "Diagnosis, repair, maintenance and upgrades for every kind of computer.",
    "repair.smartphones": "Smartphones",
    "repair.smartphonesDesc":
      "Diagnosis, repair and maintenance to get your phone back to normal.",
    "repair.gaming": "Gaming",
    "repair.gamingDesc":
      "HDMI repair, drift fixes, cleaning and full console diagnostics.",
    "repair.button": "Explore Repair →",

    "digital.eyebrow": "Digital Solutions",
    "digital.title": "Build what's next.",
    "digital.text":
      "Websites, custom systems and automation designed to help your business run smarter — built with the same care we put into every repair.",
    "digital.web": "Web",
    "digital.webDesc":
      "Websites, landing pages and business websites.",
    "digital.systems": "Systems",
    "digital.systemsDesc":
      "Custom tools, internal systems and business utilities.",
    "digital.automation": "Automation",
    "digital.automationDesc":
      "Workflows, automation and digital processes.",
    "digital.button": "Explore Digital →",

    "values.eyebrow": "Why Valadal",
    "values.title": "Built on the same four principles, every time.",
    "values.precision": "Precision",
    "values.precisionDesc":
      "Careful, methodical technical work — nothing rushed.",
    "values.transparency": "Transparency",
    "values.transparencyDesc":
      "Clear communication about what's wrong and what it takes to fix it.",
    "values.quality": "Quality",
    "values.qualityDesc":
      "Solutions built to actually last, not just to pass inspection.",
    "values.innovation": "Innovation",
    "values.innovationDesc":
      "Technology with an eye on where things are headed next.",

    "work.eyebrow": "Selected work",
    "work.title": "Real work. Real solutions.",
    "work.text":
      "We're documenting every project as we complete it. Here's the kind of work you'll find on the full portfolio.",
    "work.gaming": "Gaming",
    "work.computers": "Computers",
    "work.smartphones": "Smartphones",
    "work.digital": "Digital",
    "work.button": "View all work →",

    "about.eyebrow": "About",
    "about.title": "Technology should work for you.",
    "about.text":
      "Valadal is a technology company built on two divisions — repair and digital solutions — and one idea: understand the problem, find the solution, make it work.",
    "about.button": "Learn more →",

    "cta.title": "Let's make it work.",
    "cta.button": "Get a Quote →",

    "footer.tagline": "Technology for the real world.",
    "footer.company": "Company",
    "footer.contact": "Get in touch",
    "footer.location": "Guadalajara, Jalisco, Mexico"
  }
};


// ============================================================
// APPLY LANGUAGE
// ============================================================

function applyLanguage(language, animate = true) {

  if (!translations[language]) {
    language = "es";
  }

  const elements = document.querySelectorAll("[data-i18n]");

  const changeText = () => {

    elements.forEach((element) => {

      const key = element.dataset.i18n;

      if (translations[language][key]) {
        element.textContent = translations[language][key];
      }

    });

    document.documentElement.lang = language;

    localStorage.setItem("valadal-language", language);

    const languageLabel =
      document.getElementById("languageLabel");

    const mobileLanguageLabel =
      document.getElementById("mobileLanguageLabel");

    if (languageLabel) {
      languageLabel.textContent =
        language === "es" ? "EN" : "ES";
    }

    if (mobileLanguageLabel) {
      mobileLanguageLabel.textContent =
        language === "es" ? "English" : "Español";
    }
  };


  if (!animate) {
    changeText();
    return;
  }


  elements.forEach((element) => {
    element.classList.add("language-changing");
  });

  setTimeout(() => {

    changeText();

    elements.forEach((element) => {
      element.classList.remove("language-changing");
    });

  }, 140);
}


// ============================================================
// LANGUAGE BUTTONS
// ============================================================

const languageToggle =
  document.getElementById("languageToggle");

const mobileLanguageToggle =
  document.getElementById("mobileLanguageToggle");

const savedLanguage =
  localStorage.getItem("valadal-language") || "es";

applyLanguage(savedLanguage, false);


function toggleLanguage() {

  const currentLanguage =
    document.documentElement.lang || "es";

  const newLanguage =
    currentLanguage === "es" ? "en" : "es";

  applyLanguage(newLanguage, true);
}


if (languageToggle) {
  languageToggle.addEventListener(
    "click",
    toggleLanguage
  );
}

if (mobileLanguageToggle) {
  mobileLanguageToggle.addEventListener(
    "click",
    toggleLanguage
  );
}


// ============================================================
// 2. THEME SYSTEM
// ============================================================

const themeToggle =
  document.getElementById("themeToggle");

const mobileThemeToggle =
  document.getElementById("mobileThemeToggle");

const themeIcon =
  document.getElementById("themeIcon");

const mobileThemeIcon =
  document.getElementById("mobileThemeIcon");


function getPreferredTheme() {

  const savedTheme =
    localStorage.getItem("valadal-theme");

  if (
    savedTheme === "light" ||
    savedTheme === "dark"
  ) {
    return savedTheme;
  }

  if (
    window.matchMedia &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
  ) {
    return "dark";
  }

  return "light";
}


function applyTheme(theme) {

  document.documentElement.dataset.theme =
    theme;

  localStorage.setItem(
    "valadal-theme",
    theme
  );

  const isDark =
    theme === "dark";

  if (themeIcon) {
    themeIcon.textContent =
      isDark ? "◐" : "◐";
  }

  if (mobileThemeIcon) {
    mobileThemeIcon.textContent =
      isDark ? "◐" : "◐";
  }

  const mobileThemeText =
    document.querySelector(
      "#mobileThemeToggle [data-i18n='theme.toggle']"
    );

  if (mobileThemeText) {
    mobileThemeText.textContent =
      isDark
        ? "Modo claro"
        : "Modo oscuro";
  }
}


applyTheme(getPreferredTheme());


function toggleTheme() {

  const currentTheme =
    document.documentElement.dataset.theme ||
    "light";

  const newTheme =
    currentTheme === "dark"
      ? "light"
      : "dark";

  applyTheme(newTheme);
}


if (themeToggle) {
  themeToggle.addEventListener(
    "click",
    toggleTheme
  );
}

if (mobileThemeToggle) {
  mobileThemeToggle.addEventListener(
    "click",
    toggleTheme
  );
}


// ============================================================
// 3. NAVBAR — SCROLL
// ============================================================

const navbar =
  document.getElementById("navbar");


function updateNavbarOnScroll() {

  if (!navbar) return;

  if (window.scrollY > 8) {

    navbar.classList.add(
      "is-scrolled"
    );

  } else {

    navbar.classList.remove(
      "is-scrolled"
    );

  }
}


window.addEventListener(
  "scroll",
  updateNavbarOnScroll
);

updateNavbarOnScroll();


// ============================================================
// 4. MOBILE MENU
// ============================================================

const navToggle =
  document.getElementById("navToggle");

const navDrawer =
  document.getElementById("navDrawer");


if (navToggle && navDrawer) {

  function closeMobileMenu() {

    navDrawer.classList.remove("is-open");

    navToggle.classList.remove("is-active");

    navToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document.documentElement.classList.remove(
      "menu-open"
    );

    document.body.classList.remove(
      "menu-open"
    );
  }


  navToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        !navDrawer.classList.contains("is-open");

      if (isOpen) {

        navDrawer.classList.add("is-open");

        navToggle.classList.add("is-active");

        navToggle.setAttribute(
          "aria-expanded",
          "true"
        );

        document.documentElement.classList.add(
          "menu-open"
        );

        document.body.classList.add(
          "menu-open"
        );

      } else {

        closeMobileMenu();

      }

    }
  );


  navDrawer
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        closeMobileMenu
      );

    });

}

// ============================================================
// 5. LANGUAGE TRANSITION CSS
// ============================================================

const languageTransitionStyle =
  document.createElement("style");

languageTransitionStyle.textContent = `
  .language-changing {
    opacity: 0;
    transform: translateY(4px);
    transition:
      opacity 0.14s ease,
      transform 0.14s ease;
  }

  [data-i18n] {
    transition:
      opacity 0.14s ease,
      transform 0.14s ease;
  }
`;

document.head.appendChild(
  languageTransitionStyle
);


// ============================================================
// 6. REVEAL ON SCROLL
// ============================================================

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


if (
  revealElements.length &&
  "IntersectionObserver" in window
) {

  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "is-visible"
            );

            revealObserver.unobserve(
              entry.target
            );
          }

        });

      },
      {
        threshold: 0.15,
        rootMargin:
          "0px 0px -60px 0px"
      }
    );


  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

} else {

  revealElements.forEach((el) => {
    el.classList.add(
      "is-visible"
    );
  });

}


// ============================================================
// 7. WORK FILTERS
// ============================================================

const filterButtons =
  document.querySelectorAll(
    ".filter-btn"
  );

const workPieces =
  document.querySelectorAll(
    ".work-piece"
  );


filterButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      filterButtons.forEach((b) => {
        b.classList.remove(
          "is-active"
        );
      });

      button.classList.add(
        "is-active"
      );

      const filter =
        button.dataset.filter;

      workPieces.forEach((piece) => {

        const category =
          piece.dataset.category;

        const shouldShow =
          filter === "all" ||
          category === filter;

        piece.hidden =
          !shouldShow;
      });

    }
  );

});


// ============================================================
// 8. CONTACT FORM
// ============================================================

const contactForm =
  document.getElementById(
    "contactForm"
  );


if (contactForm) {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const requestedService =
    params.get("service");

  const serviceSelect =
    contactForm.querySelector(
      "#service"
    );


  if (
    requestedService &&
    serviceSelect
  ) {

    const match =
      Array.from(
        serviceSelect.options
      ).find(
        (option) =>
          option.value ===
          requestedService
      );

    if (match) {
      serviceSelect.value =
        requestedService;
    }
  }


  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      const successMessage =
        document.getElementById(
          "formSuccess"
        );

      if (successMessage) {

        successMessage.classList.add(
          "is-visible"
        );

      }

      contactForm.reset();
    }
  );
}


// ============================================================
// 9. HERO FLOAT CARDS
// AUTOMATIC LOOP — MOBILE + DESKTOP
// ============================================================

const floatCards =
  document.querySelectorAll(
    ".float-card"
  );

let floatIndex = 0;
let floatTimer = null;


// ------------------------------------------------------------
// MOBILE
// Abre una tarjeta durante 5 segundos.
// ------------------------------------------------------------

function showMobileFloatCard() {

  if (window.innerWidth > 860) {
    return;
  }

  floatCards.forEach((card) => {
    card.classList.remove(
      "is-expanded"
    );
  });

  if (floatCards.length) {

    floatCards[floatIndex]
      .classList.add(
        "is-expanded"
      );

    floatIndex =
      (floatIndex + 1) %
      floatCards.length;
  }
}


// ------------------------------------------------------------
// DESKTOP
// Hace que una tarjeta destaque cada 5 segundos.
// ------------------------------------------------------------

function showDesktopFloatCard() {

  if (window.innerWidth <= 860) {
    return;
  }

  floatCards.forEach((card) => {
    card.classList.remove(
      "is-active"
    );
  });

  if (floatCards.length) {

    floatCards[floatIndex]
      .classList.add(
        "is-active"
      );

    floatIndex =
      (floatIndex + 1) %
      floatCards.length;
  }
}


// ------------------------------------------------------------
// CICLO AUTOMÁTICO
// ------------------------------------------------------------

function startFloatLoop() {

  clearInterval(
    floatTimer
  );

  if (!floatCards.length) {
    return;
  }

  // Mostrar inmediatamente
  if (window.innerWidth <= 860) {

    showMobileFloatCard();

  } else {

    showDesktopFloatCard();

  }


  // Cambiar cada 5 segundos
  floatTimer =
    setInterval(() => {

      if (
        window.innerWidth <= 860
      ) {

        showMobileFloatCard();

      } else {

        showDesktopFloatCard();

      }

    }, 5000);
}


// ------------------------------------------------------------
// CLICK MANUAL
// Si el usuario toca una tarjeta en móvil,
// el ciclo se pausa.
// ------------------------------------------------------------

floatCards.forEach((card) => {

  card.addEventListener(
    "click",
    () => {

      if (
        window.innerWidth > 860
      ) {
        return;
      }

      clearInterval(
        floatTimer
      );

      floatCards.forEach(
        (other) => {

          if (other !== card) {

            other.classList.remove(
              "is-expanded"
            );

          }

        }
      );

      card.classList.toggle(
        "is-expanded"
      );


      // Reiniciar el ciclo después
      // de 8 segundos.
      clearTimeout(
        card._floatRestartTimer
      );

      card._floatRestartTimer =
        setTimeout(() => {

          floatIndex = 0;

          startFloatLoop();

        }, 8000);

    }
  );

});


// ------------------------------------------------------------
// REINICIAR SI CAMBIA EL TAMAÑO
// ------------------------------------------------------------

let lastWindowWidth = window.innerWidth;

window.addEventListener(
  "resize",
  () => {

    const currentWidth = window.innerWidth;

    if (currentWidth !== lastWindowWidth) {

      lastWindowWidth = currentWidth;

      startFloatLoop();

    }

  }
);

// ------------------------------------------------------------
// INICIAR
// ------------------------------------------------------------

startFloatLoop();

/* ============================================================
   ACCESIBILIDAD
   ============================================================ */

const accessibilityControl =
  document.getElementById("accessibilityControl");

const accessibilityToggle =
  document.getElementById("accessibilityToggle");

if (accessibilityControl && accessibilityToggle) {

  accessibilityToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    const isOpen =
      accessibilityControl.classList.toggle("is-open");

    accessibilityToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });


  document.addEventListener("click", (event) => {

    if (!accessibilityControl.contains(event.target)) {

      accessibilityControl.classList.remove("is-open");

      accessibilityToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  document
    .querySelectorAll(".accessibility-option")
    .forEach((button) => {

      button.addEventListener("click", () => {

        setTimeout(() => {

          accessibilityControl.classList.remove("is-open");

          accessibilityToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }, 150);

      });

    });
