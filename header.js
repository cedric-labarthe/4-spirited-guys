let menu = null;
let burger = null;


onload = () => {
    menu = document.querySelector(".menuContainer");
    burger = document.querySelector("#burgerIcon");
    burger.addEventListener('click', toggleOpen)
    menu.addEventListener('click', (evt) => {console.log("container gggg"); evt.preventDefault()})
}


function toggleOpen() {
  menu.classList.toggle("open");
  burger.classList.toggle("active");
}