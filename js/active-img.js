const recomendationBtn = document.querySelectorAll(".box-style");
const activeImg = document.querySelector(".summary__active-img");

const activeTitle = document.querySelector(".active-img__titles-title");
const activeSubTitle = document.querySelector(".active-img__titles-subtitle");

const title = document.querySelectorAll(".heading");
const subTitle = document.querySelectorAll(".subheading");

recomendationBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    activeImg.style.backgroundImage = btn.style.backgroundImage;
    activeTitle.innerText = title[index].innerText;
    activeSubTitle.innerText = subTitle[index].innerText;
  });
});
