// Menu
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".header-icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});