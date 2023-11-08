const hamburgerMenu = document.getElementById("hamburgerMenu");
const slideMenu = document.getElementById("slideMenu");

hamburgerMenu.addEventListener("mouseover", () => {
    slideMenu.style.width = "250px";
});

hamburgerMenu.addEventListener("mouseleave", () => {
  slideMenu.style.width = "0";
});
