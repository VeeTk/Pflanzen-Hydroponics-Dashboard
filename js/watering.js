const wateringBtn = document.querySelectorAll(".line__day");
const wateringActiveBtn = document.querySelectorAll(".line__day-active");

wateringBtn[3].classList.add("day-active");
wateringBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    wateringBtn.forEach((btn, index) => {
      btn.classList.remove("day-active");
    });
    btn.classList.add("day-active");
  });
});
