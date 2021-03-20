let popIn = null;
let productArray = [];
let productTarget = null;
let popInImage = null;

init = () => {
  popIn = document.getElementById('popInContainer');
  popIn.addEventListener('click', (evt) => {
    clickOnPopInContainer(evt);
  });

  popInImage = document.getElementById('popin__img');

  productArray = document.getElementsByClassName('product__img');
  for (let i = 0; i < productArray.length; i++) {
    productArray[i].addEventListener('click', toggleOpenPopin);
    productArray[i].addEventListener('click', (e) => getProductInfo(e));
  }

  burger = document.querySelector('#burgerIcon');
  burger.addEventListener('click', clickOnBurger);

  monthSwiper.init();
};

getProductInfo = (e) => {
  console.log(e.target.id);
  popInImage.setAttribute('src', e.target.getAttribute('src'));
  // TODO Recuperer les infos à partir du JSON
};

clickOnPopInContainer = (e) => {
  if (e.target === e.currentTarget) {
    toggleOpenPopin();
  }
};

clickOnBurger = () => {
  if (popIn.className.includes('popin-open')) {
    toggleOpenPopin();
  }
};

toggleOpenPopin = () => {
  if (!popIn.className.includes('popin-open') && !popIn.className.includes('popin-closed')) {
    popIn.classList.toggle('popin-open');
  } else {
    popIn.classList.toggle('popin-open');
    popIn.classList.toggle('popin-closed');
  }
};

sliderFeed = () => {
  // TODO Nourrir le slider avec les url du JSON
};

// TOOLS

window.addEventListener('load', init);

const monthSwiper = new Swiper('.product__slider--selection', {
  init: false,
  effect: 'coverflow', // Ou slide
  followFinger: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  //loop: true,  ==> Peut casse les ID, à vérifier par la suite
  speed: 1600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  // breakpoints: {}  ==> Peut remplacer les mediaQueries
});
