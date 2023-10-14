const wateringBtn = document.querySelectorAll(".line__day");
const wateringActiveBtn = document.querySelectorAll(".line__day-active");

const daytimeTemp = document.querySelector(".temperature__daytime");
const nightTemp = document.querySelector(".temperature__night");
const dayTempNumber = document.getElementById("day-temper");
const nightTempNumber = document.getElementById("night-temper");

wateringBtn[3].classList.add("day-active");
wateringBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    wateringBtn.forEach((btn, index) => {
      btn.classList.remove("day-active");
    });
    btn.classList.add("day-active");
    if (index === 0) {
      daytimeTemp.style.top = "-120px";
      nightTemp.style.top = "-103px";
      dayTempNumber.innerText = "16-22°C";
      nightTempNumber.innerText = "0-19°C";
    } else if (index === 1) {
      daytimeTemp.style.top = "-140px";
      nightTemp.style.top = "-110px";
      dayTempNumber.innerText = "18-24°C";
      nightTempNumber.innerText = "5-20°C";
    } else if (index === 2) {
      daytimeTemp.style.top = "-160px";
      nightTemp.style.top = "-117px";
      dayTempNumber.innerText = "19-25°C";
      nightTempNumber.innerText = "10-20°C";
    } else if (index === 3) {
      daytimeTemp.style.top = "-180px";
      nightTemp.style.top = "-120px";
      dayTempNumber.innerText = "21-27°C";
      nightTempNumber.innerText = "15-21°C";
    } else if (index === 4) {
      daytimeTemp.style.top = "-90px";
      nightTemp.style.top = "-103px";
      dayTempNumber.innerText = "1-20°C";
      nightTempNumber.innerText = "0-19°C";
    } else if (index === 5) {
      daytimeTemp.style.top = "-130px";
      nightTemp.style.top = "-123px";
      dayTempNumber.innerText = "17-23°C";
      nightTempNumber.innerText = "14-21°C";
    } else if (index === 6) {
      daytimeTemp.style.top = "-170px";
      nightTemp.style.top = "-170px";
      dayTempNumber.innerText = "20-26°C";
      nightTempNumber.innerText = "19-24°C";
    }
  });
});
