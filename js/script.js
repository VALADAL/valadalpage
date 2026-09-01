// ============================================================
// VALADAL — script.js
// Un solo archivo, compartido por todas las páginas.
// Cada bloque revisa si el elemento existe antes de usarlo,
// así el mismo script funciona en Home, Repair, Digital, etc.
// ============================================================

// ---------- 1. Navbar: sombra/fondo al hacer scroll ----------
const navbar = document.getElementById("navbar");

function updateNavbarOnScroll() {
  if (!navbar) return;
  if (window.scrollY > 8) {
    navbar.classList.add("is-scrolled");
  } else {
    navbar.classList.remove("is-scrolled");
  }
}
window.addEventListener("scroll", updateNavbarOnScroll);
updateNavbarOnScroll();

// ---------- 2. Menú móvil (drawer de pantalla completa) ----------
const navToggle = document.getElementById("navToggle");
const navDrawer = document.getElementById("navDrawer");

if (navToggle && navDrawer) {
  navToggle.addEventListener("click", () => {
    const isOpen = navDrawer.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Cerrar el drawer al tocar cualquier link dentro de él
  navDrawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navDrawer.classList.remove("is-open");
      navToggle.classList.remove("is-active");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

// ---------- 3. Reveal-on-scroll (fade + slide up) ----------
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  // Si el navegador no soporta IntersectionObserver, mostramos todo directo
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

// ---------- 4. Filtros de la página /work ----------
const filterButtons = document.querySelectorAll(".filter-btn");
const workPieces = document.querySelectorAll(".work-piece");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Marcamos el botón activo
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    button.classList.add("is-active");

    const filter = button.dataset.filter; // ej: "repair", "digital", "all"

    workPieces.forEach((piece) => {
      const category = piece.dataset.category;
      const shouldShow = filter === "all" || category === filter;
      piece.hidden = !shouldShow;
    });
  });
});

// ---------- 5. Formulario de contacto ----------
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  // Si llegamos desde un botón "Get a Quote" con ?service=repair o ?service=digital,
  // preseleccionamos el servicio en el formulario.
  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get("service");
  const serviceSelect = contactForm.querySelector("#service");

  if (requestedService && serviceSelect) {
    const match = Array.from(serviceSelect.options).find(
      (option) => option.value === requestedService
    );
    if (match) serviceSelect.value = requestedService;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const successMessage = document.getElementById("formSuccess");
    if (successMessage) {
      successMessage.classList.add("is-visible");
    }

    contactForm.reset();
  });
}
