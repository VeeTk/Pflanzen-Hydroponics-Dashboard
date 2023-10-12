// SideBar
const sideBarBtn = document.querySelectorAll(".buttons__section");
const sideBarActiveBtn = document.querySelectorAll(".buttons__section-active");

sideBarBtn[0].classList.add("buttons__section-active");
sideBarBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    sideBarBtn.forEach((btn, index) => {
      btn.classList.remove("buttons__section-active");
    });
    btn.classList.add("buttons__section-active");
  });
});
