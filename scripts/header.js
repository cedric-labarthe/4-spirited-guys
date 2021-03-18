let menu = null;
let burger = null;
let windowWidth = null;

onload = () => {
  console.log("onload header")

    windowWidth = window.innerWidth;
    window.addEventListener('resize', () => windowWidth = window.innerWidth)
    menu = document.querySelector(".menuContainer");
    burger = document.querySelector("#burgerIcon");
    burger.addEventListener('click', toggleOpen);
    burger.addEventListener('mouseenter', highLight);
    burger.addEventListener('mouseleave', highLight);
    menu.addEventListener('click', (evt) => {clickOnMenuContainer(evt)});
}

clickOnMenuContainer = (e) => {
  if(e.target === e.currentTarget) {
    toggleOpen();
  }
}

function toggleOpen() {
  menu.classList.toggle("open");
  burger.classList.toggle("active");
}

function highLight() {
  if (windowWidth > 414) burger.classList.toggle('highLight');
}