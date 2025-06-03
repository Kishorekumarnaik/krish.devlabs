document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const hamburger = document.getElementById("hamburger");
  const close = document.getElementById("close");
  const mobileMenu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
    close.classList.toggle("hidden");
  });
});

