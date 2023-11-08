const hamburgerMenu = document.getElementById("hamburgerMenu");
const slideMenu = document.getElementById("slideMenu");

hamburgerMenu.addEventListener("click", () => {
  if (slideMenu.style.width === "0px" || !slideMenu.style.width) {
    slideMenu.style.width = "250px";
  }
});

hamburgerMenu.addEventListener("click", () => {
  slideMenu.style.width = "0";
});
