$(document).ready(function () {
  $(".date-picker").pDatepicker({
    initialValue: false,
    format: "DD MMMM YYYY",
  });
});

const schoolname_container = document.querySelector(".schoolname-container");
const schoolname = document.querySelector(".schoolname-selection");
const grade_container = document.querySelector(".grade-container");
const grade = document.querySelector(".grade-selection");
const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const school_down_icon = document.querySelector(".down1");
const grade_down_icon = document.querySelector(".down2");

let ringing = false;
button.addEventListener("click", (e) => {
  if (!ringing) {
    inputs.forEach((item) => {
      if (!item.value) {
        item.style.animation = "ring .5s";
        ringing = true;
        setTimeout(() => {
          item.style.animation = "none";
          ringing = false;
        }, 1000);
      }
    });
    if (schoolname.value == "none") {
      schoolname_container.style.animation = "ring .5s";
      ringing = true;
      setTimeout(() => {
        schoolname_container.style.animation = "none";
        ringing = false;
      }, 1000);
    }
    if (grade.value == "none") {
      grade_container.style.animation = "ring .5s";
      ringing = true;
      setTimeout(() => {
        grade_container.style.animation = "none";
        ringing = false;
      }, 1000);
    }
  }
  if (ringing) e.preventDefault();
});

let is_open1 = false;
schoolname.addEventListener("click", () => {
  if (is_open1) {
    school_down_icon.style.rotate = "0deg"
    is_open1 = false;
  } else {
    school_down_icon.style.rotate = "180deg"
    is_open1 = true;
  }
});

let is_open2 = false;
grade.addEventListener("click", () => {
  if (is_open2) {
    grade_down_icon.style.rotate = "0deg"
    is_open2 = false;
  } else {
    grade_down_icon.style.rotate = "180deg"
    is_open2 = true;
  }
});
