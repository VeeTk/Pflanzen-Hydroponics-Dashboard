const recomendationBtn = document.querySelectorAll(".box-style");
const activeImg = document.querySelector(".summary__active-img");

recomendationBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    activeImg.style.backgroundImage = btn.style.backgroundImage;
  });
});
