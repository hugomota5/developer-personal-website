// SHOW MENU
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// VALIDATE
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("nav__menu-open");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu-open");
  });
}
// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SHADOW HEADER
const shadowHeader = () => {
  const header = document.getElementById("idHeader");
  this.scrollY >= 50
    ? header.classList.add("header-shadow")
    : header.classList.remove("header-shadow");
};
window.addEventListener("scroll", shadowHeader);
