const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

export const hamburgerclicker = hamburger.addEventListener("click", function() {
    menu.classList.toggle("show-menu");
});