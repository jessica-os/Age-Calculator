const form = document.querySelector(".form");
const btn = document.querySelector(".btn-icon");

const inputDay = document.querySelector("#day");
const labelDay = document.querySelector(".label-day");
const wrongValueDay = document.querySelector(".wrong-value-day");

const inputMonth = document.querySelector("#month");
const labelMonth = document.querySelector(".label-month");
const wrongValueMonth = document.querySelector(".wrong-value-month");

const inputYear = document.querySelector("#year");
const labelYear = document.querySelector(".label-year");
const wrongValueYear = document.querySelector(".wrong-value-year");

const resultDay = document.querySelector(".days");
const resultMonth = document.querySelector(".months");
const resultYear = document.querySelector(".years");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  btn.addEventListener("click", () => {
    validateDay();
    validateMonth();
    validateYear();
    getDates();
  });
  

function getDates() {
  let day = inputDay.value;
  let month = inputMonth.value - 1;
  let year = inputYear.value;

  let dateOfbirth = new Date(year, month, day);
  let today = new Date();

  let difference = today - dateOfbirth;
  let age = new Date(difference);

  resultYear.innerHTML = age.getUTCFullYear() - 1970;
  resultDay.innerHTML = age.getUTCDate() - 1;
  resultMonth.innerHTML = age.getUTCMonth();
}

function validateDay() {
  if (day.value === "") {
    inputDay.classList.add("error");
    labelDay.classList.add("error");
    inputDay.nextElementSibling.style.display = "block";
  } else if (day.value > 31) {
    inputDay.nextElementSibling.style.display = "none";
    wrongValueDay.style.display = "block";
  } else {
    inputDay.classList.remove("error");
    labelDay.classList.remove("error");
    inputDay.nextElementSibling.style.display = "none";
    wrongValueDay.style.display = "none";
  }
}
function validateMonth() {
  if (month.value === "") {
    inputMonth.classList.add("error");
    labelMonth.classList.add("error");
    inputMonth.nextElementSibling.style.display = "block";
  } else if (month.value > 12) {
    inputMonth.nextElementSibling.style.display = "none";
    wrongValueMonth.style.display = "block";
  } else {
    inputMonth.classList.remove("error");
    labelMonth.classList.remove("error");
    inputMonth.nextElementSibling.style.display = "none";
    wrongValueMonth.style.display = "none";
  }
}
function validateYear() {
  if (year.value === "") {
    inputYear.classList.add("error");
    labelYear.classList.add("error");
    inputYear.nextElementSibling.style.display = "block";
  } else if (year.value > 2023) {
    inputYear.nextElementSibling.style.display = "none";
    wrongValueYear.style.display = "block";
  } else {
    inputYear.classList.remove("error");
    labelYear.classList.remove("error");
    inputYear.nextElementSibling.style.display = "none";
    wrongValueYear.style.display = "none";
  }
}

