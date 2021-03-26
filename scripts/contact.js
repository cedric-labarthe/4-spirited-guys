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

  btn.addEventListener("click", (e) => {
    popup();
  e.preventDefault();
  });
}

function popup() {
  if (inputName.value && inputMail.value && inputMsg.value) {
    popMsg();
  }
}

function popMsg() {
  popin.classList.add("show");
  popin.classList.add("opacityMax");

  setTimeout(() => {
    console.log("redirect")
    window.location = "index.html";
}, 2000);
}

window.addEventListener('load', init);