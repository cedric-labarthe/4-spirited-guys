let popIn = null;
let productArray = null;
let productTarget = null;
let popInImage = null;


init = () => {
    popIn = document.getElementById('popInContainer');
    popIn.addEventListener('click', (evt) => {clickOnPopInContainer(evt)});

    popInImage = document.getElementById('popup__img');

    productArray = document.getElementsByClassName('selection__img');
    for (let i = 0; i < productArray.length; i++) {
        productArray[i].addEventListener('click', toggleOpenPopin);
        productArray[i].addEventListener('click', (e) => getProductInfo(e));
    }

    burger = document.querySelector("#burgerIcon");
    if (popIn.className.includes('.popin-open')) {
        console.log('popin detecté');
    }
    burger.addEventListener('click', clickOnBurger);
}



getProductInfo = (e) => {
    console.log(e.target.id);
    popInImage.setAttribute('src', e.target.getAttribute('src'));
}

clickOnPopInContainer = (e) => {
  if(e.target === e.currentTarget) {
    toggleOpenPopin();
  } 
}

clickOnBurger = () => {
    if (popIn.className.includes('popin-open')) {
        toggleOpenPopin();
    }
}

function toggleOpenPopin() {
    popIn.classList.toggle("popin-open");

}

sliderFeed = () => {

}

popInFeed = () => {

}

window.addEventListener('load', init)