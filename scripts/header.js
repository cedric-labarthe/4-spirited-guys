let menu = null;
let burger = null;
let windowWidth = null;

const menuItems = [
  {title: "Home", img: "/images/home_glass.jpg", link: "index.html"},
  {title: "Our products", img: "/images/menu_whisky.jpg", link: "products.html"},
  {title: "Reservation", img: "/images/home_resto.jpg", link: "reservation.html"},
  {title: "Contact", img: "/images/home_cocktail.jpg", link: "contact.html"},
  {title: "About us", img: "/images/menu_whisky.jpg", link: "aboutus.html"},
  {title: "My cart", img: "/images/menu_resto.jpg", link: "cart.html"}
]

init = () => {
    buildMenu();
    windowWidth = window.innerWidth;
    window.addEventListener('resize', () => windowWidth = window.innerWidth)
    menu = document.querySelector(".menuContainer");
    burger = document.querySelector("#burgerIcon");
    burger.addEventListener('click', toggleOpen);
    burger.addEventListener('mouseenter', highLight);
    burger.addEventListener('mouseleave', highLight);
    menu.addEventListener('click', (evt) => {clickOnMenuContainer(evt)});

    let card = JSON.parse(localStorage.getItem("cart"));
  
    if(card && card.length) {
      let navIcon = document.querySelector(".navIcon");
      navIcon.src = "../images/shopping-cart.png";
      navIcon.addEventListener("mouseover", () => {
        navIcon.src = "../images/shopping-cart-selected.png";
      })
      navIcon.addEventListener("mouseleave", () => {
        navIcon.src = "../images/shopping-cart.png";
      })
      navIcon.classList.add("clickable");
      navIcon.addEventListener("click", () => {
        window.location = location.origin + "/cart.html";
      })

    }
}

buildMenu = () => {
  const linkContainer = document.querySelector(".linkContainer");
  menuItems.forEach(item => {
    let link = document.createElement("a");
    link.innerText = item.title;
    link.href = item.link;
    link.addEventListener("mouseover", () => {
      document.getElementById("menuImg").style.backgroundImage = `url(${item.img})`;
    })
    linkContainer.appendChild(link)

   })
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

window.addEventListener('load', init);
