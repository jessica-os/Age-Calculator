const form = document.querySelector(".form");
const btn = document.querySelector(".btn-icon");

const resultDay = document.querySelector(".days");
const resultMonth = document.querySelector(".months");
const resultYear = document.querySelector(".years");

let inputs = [...document.getElementsByTagName("input")];
let labels = [...document.getElementsByTagName("label")];
let spansMgsVazios = document.querySelectorAll(".empty-input");
let wrongValue = document.querySelectorAll(".wrong-value");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  let teste = validateInputs();
  console.log(teste);
});

function validateInputs() {
  validateEmptyInputs(inputs);
  validateDay(inputs);
  validateMonth(inputs);
  validaYear(inputs);
  return;
}

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
}

const validateEmptyInputs = (inputs) => {
  inputs.forEach((input, index) => {
    if (input.value === "") {
      labels[index].classList.add("error");
      spansMgsVazios[index].style.display = "block";
      input.classList.add("error");
    } else {
      labels[index].classList.remove("error");
      spansMgsVazios[index].style.display = "none";
      input.classList.remove("error");
    }
  });
};

const validateDay = (inputs) => {
  const day = parseInt(inputs[0].value, 10);
  if (day > 31) {
    inputs[0].nextElementSibling.style.display = "none";
    wrongValue[0].style.display = "block";
  }
};

const validateMonth = (inputs) => {
  const month = parseInt(inputs[1].value, 10);

  if (month > 12) {
    inputs[1].nextElementSibling.style.display = "none";
    wrongValue[1].style.display = "block";
  }
};

const validaYear = (inputs) => {
  const year = parseInt(inputs[2].value, 10);
  if (year > 2023) {
    inputs[2].nextElementSibling.style.display = "none";
    wrongValue[2].style.display = "block";
  }
};
