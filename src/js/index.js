const form = document.querySelector(".form");
const btn = document.querySelector(".btn-icon");
let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");
let spansMgsVazios = document.querySelectorAll(".empty-input");
let wrongValue = document.querySelectorAll(".wrong-value");
const msg = document.querySelector(".msg-error");

const resultDay = document.querySelector(".days");
const resultMonth = document.querySelector(".months");
const resultYear = document.querySelector(".years");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  if (validateEmptyInputs(inputs)) return;

  getDates();
});

const validateEmptyInputs = (inputs) => {
  let camposVazio = false;
  inputs.forEach((input, index) => {
    if (input.value === "") {
      labels[index].classList.add("error");
      spansMgsVazios[index].style.display = "block";
      input.classList.add("error");
      camposVazio = true;
    } else {
      labels[index].classList.remove("error");
      spansMgsVazios[index].style.display = "none";
      input.classList.remove("error");
      validateDay(inputs);
      validateMonth(inputs);
      validaYear(inputs);
    }
  });
  return camposVazio;
};

const validateDay = (inputs) => {
  const day = parseInt(inputs[0].value, 10);
  if (day > 31 || day <= 0) {
    inputs[0].nextElementSibling.style.display = "none";
    wrongValue[0].style.display = "block";
  } else {
    wrongValue[0].style.display = "none";
  }
};

const validateMonth = (inputs) => {
  const month = parseInt(inputs[1].value, 10);

  if (month > 12 || month <= 0) {
    inputs[1].nextElementSibling.style.display = "none";
    wrongValue[1].style.display = "block";
  } else {
    wrongValue[1].style.display = "none";
  }
};

const validaYear = (inputs) => {
  const year = parseInt(inputs[2].value, 10);
  if (year > 2023 || year <= 0) {
    inputs[2].nextElementSibling.style.display = "none";
    wrongValue[2].style.display = "block";
  } else {
    wrongValue[2].style.display = "none";
  }
};

function getDates() {
  let day = inputs[0].value;
  let month = inputs[1].value - 1;
  let year = inputs[2].value;

  let dateOfbirth = new Date(year, month, day);
  let today = new Date();

  let difference = today - dateOfbirth;
  let age = new Date(difference);

  resultYear.innerHTML = age.getUTCFullYear() - 1970;
  resultDay.innerHTML = age.getUTCDate() - 1;
  resultMonth.innerHTML = age.getUTCMonth();
  if (dateOfbirth > today) {
    resultYear.innerHTML = "--";
    resultDay.innerHTML = "--";
    resultMonth.innerHTML = "--";
    wrongValue[0].style.display = "block";
    wrongValue[1].style.display = "block";
    wrongValue[2].style.display = "block";
    wrongValue[0].innerHTML = "the date must be in the past";
    wrongValue[1].innerHTML = "the date must be in the past";
    wrongValue[2].innerHTML = "the date must be in the past";
  }
}
