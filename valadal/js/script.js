// ============================================
// VALADAL — script.js
// Menú móvil + cerrar menú al hacer clic en un link
// ============================================

// 1. Agarramos los elementos que necesitamos del HTML
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

// 2. Cuando se hace clic en el botón de hamburguesa, abrimos/cerramos el menú
navToggle.addEventListener("click", () => {
  navbar.classList.toggle("is-open");
  navToggle.classList.toggle("is-active");

  // Para accesibilidad: avisamos si el menú está abierto o cerrado
  const isOpen = navbar.classList.contains("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// 3. Si el usuario toca un link del menú móvil, lo cerramos automáticamente
const allNavLinks = navLinks.querySelectorAll("a");
allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("is-open");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// 4. Formulario de contacto: por ahora solo mostramos un mensaje
//    (después esto se puede conectar a un servicio real de envío de correos)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("¡Gracias! Tu mensaje fue recibido. Te contactaremos pronto.");
  contactForm.reset();
});
