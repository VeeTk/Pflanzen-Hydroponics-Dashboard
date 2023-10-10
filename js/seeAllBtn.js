// seeAllBtn
const seeAllBtn = document.querySelector(".top__right");
const box4 = document.querySelector(".boxes__box-4");
const box5 = document.querySelector(".boxes__box-5");
const box6 = document.querySelector(".boxes__box-6");
const seeAllActive = document.querySelector(".recomendation__boxes");

seeAllBtn.addEventListener("click", () => {
  if (seeAllActive.style.flexWrap === "wrap") {
    seeAllActive.style.flexWrap = "no-wrap";
  } else {
    seeAllActive.style.flexWrap = "wrap";
  }
  box4.classList.toggle("hover");
  box5.classList.toggle("hover");
  box6.classList.toggle("hover");
});
