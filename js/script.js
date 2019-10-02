//CHANGE ICON HAMBURGER
function changeHamburger(x) {
  x.classList.toggle("change");
}

//Navbar hamburger
var navbarHamburger = document.getElementById("hamburger-menu");
var headerMenu = document.querySelector(".header-list");

function toggleMenu(visible) {
  headerMenu.classList.toggle("show", visible);
}

navbarHamburger.addEventListener("click", function(e) {
  e.preventDefault();
  toggleMenu();
});
