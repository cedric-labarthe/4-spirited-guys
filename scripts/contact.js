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

  burger.addEventListener("click", clickOnPopinContainer);
}

function popup() {
  if (inputName.value && inputMail.value && inputMsg.value) {
    popMsg();
  }
}

function popMsg() {
  popin.classList.add("show");
  popin.classList.add("opacityMax");
}


closePopin = () => {
  popin.classList.remove("opacityMax");
  setTimeout(() => {
      popin.classList.remove("show");
  }, 500);
}

clickOnPopinContainer = (e) => {
  if(e.target === e.currentTarget) {
      closePopin();
  }
}

window.addEventListener('load', init);