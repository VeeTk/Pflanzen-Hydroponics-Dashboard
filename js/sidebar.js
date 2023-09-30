console.log("подключен");
const sideBarBtn = document.querySelectorAll(".buttons__section");
const sideBarActiveBtn = document.querySelectorAll(".buttons__section-active");

console.log(sideBarBtn);

sideBarBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    sideBarBtn.forEach((btn , index) => {
      btn.classList.remove("buttons__section-active");
    })
    btn.classList.add("buttons__section-active");
  });
});
