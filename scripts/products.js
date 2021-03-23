// Initialisation des variables
let popInContainer = null;
let productArray = [];
let productTarget = null;
let popInImage = null;
let popInDesc = null;
let popInTitle = null;
let productObj = {};
let swiperEl = null;
let mainContainer = null;
let moreInfoBtn = null;
let lastYScrollPos = null;
let closePopinBtn = null;
let sections = null;

// Recuperation du JSON des produits
fetchJsonProduct = () => {
  fetch('../products.json').then((response) =>
  response.json().then((obj) => {
    productObj = obj.products;
    init();
  })
);
}

init = () => {
  document.getElementById('loading').remove();

  mainContainer = document.getElementById('slides-main-container');

  // Creation des strucures html des carousels
  swiperCreate('monthly');
  swiperCreate('whisky');
  swiperCreate('rhum');
  swiperCreate('wine');
  swiperCreate('tapas');

  sections = document.getElementsByClassName('product');
  for (let i = 0; i < sections.length; i++) {
    if (i % 2 !== 0) sections[i].classList.add('reversed');
  }

  // Initialisation des affichages carousels
  monthlySwiper.init();
  whiskySwiper.init();
  rhumSwiper.init();
  wineSwiper.init();
  tapasSwiper.init();

  popInCreate();

  popInImage = document.getElementById('popin__img');
  popInTitle = document.getElementsByClassName('more-info-popin__title')[0];
  popInDesc = document.getElementsByClassName('more-info-popin__desc')[0];
  closePopinBtn = document.getElementById('close-popin');
  closePopinBtn.addEventListener('click', toggleOpenPopin);

  // Récuperation des images des carousels + liens avec le produit selectionné
  moreInfoBtn = document.getElementsByClassName('product__btn');
  productArray = document.getElementsByClassName('product__img');
  for (let i = 0; i < productArray.length; i++) {
    productArray[i].addEventListener('click', (e) => getProductInfo(e));
    productArray[i].addEventListener('click', toggleOpenPopin);
    moreInfoBtn[i].addEventListener('click', (e) => getProductInfo(e));
    moreInfoBtn[i].addEventListener('click', toggleOpenPopin);
  }

  burger = document.querySelector('#burgerIcon');
  burger.addEventListener('click', clickOnBurger);

  window.onscroll = handleSwiperWithScroll;
  let initAutoplay = ['whisky', 'rhum', 'wine', 'tapas'].forEach((x) => startStopSlider(x, 'stop'));
};

handleSwiperWithScroll = () => {
  let centerX = document.documentElement.clientWidth / 2;
  let centerY = document.documentElement.clientHeight / 2;
  let centredClass = document.elementFromPoint(centerX, centerY).classList[0];
  chooseTheSliders(centredClass);
};

chooseTheSliders = (centredClass) => {
  let classArray = ['monthly', 'whisky', 'rhum', 'wine', 'tapas'];
  let filtredArray = classArray.filter((x) => x !== centredClass);
  filtredArray.forEach((x) => startStopSlider(x, 'stop'));
  startStopSlider(centredClass, 'start');
};

// Création de l'élement + listener
popInCreate = () => {
  popInContainer = document.getElementById('popInContainer');
  popInContainer.addEventListener('click', (evt) => {
    clickOnPopInContainer(evt);
  });
};

// Récupere les infos de l'élement clické
getProductInfo = (e) => {
  if (!mainContainer.className.includes('hidden-slider')) {
    lastYScrollPos = window.scrollY;
  }
  sectionSelect = productObj[e.target.classList[0]];
  let index = sectionSelect.map((p) => p.id).indexOf(parseInt(e.target.classList[1]));
  popInContainer.classList.add(e.target.classList[0]);
  popInImage.setAttribute('src', sectionSelect[index].img);
  popInDesc.innerText = sectionSelect[index].description;
  popInTitle.innerText = sectionSelect[index].title;
  startStopSlider(e.target.classList[0], 'stop');
};

// Si l'on click sur le container => ferme la popIn et retire une class
clickOnPopInContainer = (e) => {
  if (e.target === e.currentTarget) {
    toggleOpenPopin();
    startStopSlider(e.target.classList[1], 'start');
    e.target.classList.remove(e.target.classList[1]);
  }
};

clickOnBurger = () => {
  if (popIn.className.includes('popin-open')) {
    toggleOpenPopin();
  }
};

toggleOpenPopin = () => {
  popInContainer.classList.toggle('popin-open');
  popInContainer.classList.toggle('popin-closed');
  if (mainContainer.className.includes('hidden-slider')) {
    mainContainer.classList.remove('hidden-slider');
    window.scroll(0, lastYScrollPos);
  } else {
    mainContainer.classList.add('hidden-slider');
  }
};

// TOOLS

window.addEventListener('load', fetchJsonProduct);

// Crée une structure html en fonction de l'argument passé
swiperCreate = (swiperName) => {
  let section = document.createElement('section');
  section.classList.add(swiperName, 'product');
  section.id = `${swiperName}-section`;

  let sectionTitle = document.createElement('h2');
  sectionTitle.classList.add(swiperName, 'product__title');
  sectionTitle.innerText = `- Our ${swiperName} selection -`;

  let sectionPresentation = document.createElement('div');
  sectionPresentation.classList.add(swiperName, 'section-pres');
  let sectionDescription = document.createElement('p');
  sectionDescription.classList.add('section-desc');
  sectionDescription.innerText =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ea suscipit, facilis itaque dolorem consectetur assumenda eveniet harum soluta numquam.';
  sectionPresentation.appendChild(sectionTitle);
  sectionPresentation.appendChild(sectionDescription);

  let slider = document.createElement('div');
  slider.classList.add('swiper-container', 'product__slider--' + swiperName);

  let wrapper = document.createElement('div');
  wrapper.classList.add('swiper-wrapper');

  let pagin = document.createElement('div');
  pagin.classList.add('swiper-pagination');

  section.appendChild(sectionPresentation);
  section.appendChild(slider);
  slider.appendChild(wrapper);
  slider.appendChild(pagin);
  mainContainer.appendChild(section);

  console.log(productObj, swiperName)
  productObj[swiperName].map((p) => {
    let productContainer = document.createElement('div');
    productContainer.classList.add(swiperName, 'swiper-slide', 'product__container');

    let productTitle = document.createElement('h2');
    productTitle.classList.add(swiperName, 'product__title');
    productTitle.innerText = p.title;
    productContainer.appendChild(productTitle);

    let productImg = document.createElement('img');
    productImg.classList.add(swiperName, p.id, 'product__img'); // Pour arreter le slider onClick
    productImg.setAttribute('src', p.img);
    productImg.setAttribute('alt', p.title);
    productContainer.appendChild(productImg);

    let productBtn = document.createElement('button');
    productBtn.classList.add(swiperName, p.id, 'product__btn');
    productBtn.innerText = 'More info';
    productContainer.appendChild(productBtn);

    wrapper.appendChild(productContainer);
  });
};

// Object configuration de swiper
const swiperConf = {
  init: false, // Permet d'initialiser plus tard
  effect: 'coverflow', // Ou slide, à vous de dire ;)
  followFinger: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  speed: 1600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      effect: 'slide',
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
};

// Creation des swipers par catégorie
const monthlySwiper = new Swiper('.product__slider--monthly', swiperConf);
const whiskySwiper = new Swiper('.product__slider--whisky', swiperConf);
const rhumSwiper = new Swiper('.product__slider--rhum', swiperConf);
const wineSwiper = new Swiper('.product__slider--wine', swiperConf);
const tapasSwiper = new Swiper('.product__slider--tapas', swiperConf);

startStopSlider = (elClass, action) => {
  switch (elClass) {
    case 'monthly':
      action === 'start' ? monthlySwiper.autoplay.start() : monthlySwiper.autoplay.stop();
      break;
    case 'whisky':
      action === 'start' ? whiskySwiper.autoplay.start() : whiskySwiper.autoplay.stop();
      break;
    case 'rhum':
      action === 'start' ? rhumSwiper.autoplay.start() : rhumSwiper.autoplay.stop();
      break;
    case 'wine':
      action === 'start' ? wineSwiper.autoplay.start() : wineSwiper.autoplay.stop();
      break;
    case 'tapas':
      action === 'start' ? tapasSwiper.autoplay.start() : tapasSwiper.autoplay.stop();
      break;
  }
};
