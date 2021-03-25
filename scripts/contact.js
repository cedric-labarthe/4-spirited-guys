let popin = null;
let btn = null;
let inputName = null;
let inputMail = null;
let inputMsg = null;


function init() {

  popin = document.querySelector(".popin");
  btn = document.getElementById("btn-form");
  inputName = document.getElementById("name");
  inputMail = document.getElementById("email");
  inputMsg = document.getElementById("message");
  burger = document.getElementById("burgerIcon");

  btn.addEventListener("click", popup);

  popin.addEventListener("click", (evt) => {
    clickOnPopinContainer(evt);
  });

  burger.addEventListener("click", burgerClosesPopin);
}

function popup() {
  if (inputName.value && inputMail.value && inputMsg.value) {
    popMsg();
  }
}

function popMsg() {
  popin.classList.toggle("hidden");
}

clickOnPopinContainer = (e) => {
  if (e.target === e.currentTarget) {
    popin.classList.toggle("popinOffEffect");
    popin.classList.toggle("popinOnEffect");
    setTimeout(() => {
      popin.classList.toggle("popinOff");
    }, 170);
  }
};

function burgerClosesPopin() {
  if (!popin.classList.contains("popinOff")) {
    popin.classList.toggle("popinOffEffect");
    popin.classList.toggle("popinOnEffect");
    setTimeout(() => {
      popin.classList.toggle("popinOff");
    }, 190);
  }
}

window.addEventListener('load', init);