const popin = document.querySelector(".popin");
const btn = document.getElementById("btn-form");
const inputName = document.getElementById("name");
const inputMail = document.getElementById("email");
const inputMsg = document.getElementById("message");

btn.addEventListener("click", popup);

function popup() {
  if (inputName.value && inputMail.value && inputMsg.value) {
    popMsg();
  }
}

function popMsg() {
  popin.classList.toggle("hidden");
}

popin.addEventListener("click", (evt) => {
  clickOnPopinContainer(evt);
});

clickOnPopinContainer = (e) => {
  if (e.target === e.currentTarget) {
    popin.classList.toggle("popinOffEffect");
    popin.classList.toggle("popinOnEffect");
    setTimeout(() => {
      popin.classList.toggle("popinOff");
    }, 170);
  }
};

burger.addEventListener("click", burgerClosesPopin);

function burgerClosesPopin() {
  if (!popin.classList.contains("popinOff")) {
    popin.classList.toggle("popinOffEffect");
    popin.classList.toggle("popinOnEffect");
    setTimeout(() => {
      popin.classList.toggle("popinOff");
    }, 190);
  }
}
