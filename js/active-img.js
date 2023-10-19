const recomendationBtn = document.querySelectorAll(".box-style");
const activeImg = document.querySelector(".summary__active-img");

const activeTitle = document.querySelector(".active-img__titles-title");
const activeSubTitle = document.querySelector(".active-img__titles-subtitle");

const title = document.querySelectorAll(".heading");
const subTitle = document.querySelectorAll(".subheading");

recomendationBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    activeImg.style.backgroundImage = btn.style.backgroundImage;
    // activationTitle();

    title.forEach((title, index) => {
      console.log(index);
    });
    // console.log(btn.parentElement[index].innerText);

    // activationTitle();
    // activeTitle.innerText = title.innerText;
  });
});
function activationTitle() {
  title.forEach((title, index) => {
    console.log(title.innerText);
  });
}
