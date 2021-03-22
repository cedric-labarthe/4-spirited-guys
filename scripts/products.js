// Initialisation des variables
let popIn = null;
let productArray = [];
let productTarget = null;
let popInImage = null;
let popInDesc = null;
let popInTitle = null;
let productObj = {};
let swiperEl = null;
let mainContainer = null;

// Recuperation du JSON des produits
fetch('../products.json').then((response) =>
  response.json().then((obj) => {
    productObj = obj.products;
  })
);

init = () => {
  mainContainer = document.getElementById('slides-main-container');

  // Creation des strucures html des carousels
  swiperCreate('monthly');
  swiperCreate('whisky');
  swiperCreate('rhum');
  swiperCreate('wine');
  swiperCreate('tapas');

  popInCreate();

  popInImage = document.getElementById('popin__img');
  popInTitle = document.getElementsByClassName('more-info-popin__title')[0];
  popInDesc = document.getElementsByClassName('more-info-popin__desc')[0];

  // Récuperation des images des carousels + liens avec le produit selectionné
  productArray = document.getElementsByClassName('product__img');
  for (let i = 0; i < productArray.length; i++) {
    productArray[i].addEventListener('click', toggleOpenPopin);
    productArray[i].addEventListener('click', (e) => getProductInfo(e));
  }

  burger = document.querySelector('#burgerIcon');
  burger.addEventListener('click', clickOnBurger);

  // Initialisation des affichages carousels
  monthlySwiper.init();
  whiskySwiper.init();
  rhumSwiper.init();
  wineSwiper.init();
  tapasSwiper.init();
};

// Création de l'élement + listener
popInCreate = () => {
  popIn = document.getElementById('popInContainer');
  popIn.addEventListener('click', (evt) => {
    clickOnPopInContainer(evt);
  });
};

// Récupere les infos de l'élement clické
getProductInfo = (e) => {
  sectionSelect = productObj[e.target.className];
  id = sectionSelect.map((p) => p.id).indexOf(parseInt(e.target.id));
  console.log(id);
  popInImage.setAttribute('src', e.target.getAttribute('src'));
  popInDesc.innerText = sectionSelect[id].description;
  popInTitle.innerText = sectionSelect[id].title;
};

// Si l'on click sur le container => ferme la popIn
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

// TOOLS

window.addEventListener('load', init);

// Crée une structure html en fonction de l'argument passé
swiperCreate = (swiperName) => {
  let section = document.createElement('section');
  section.classList.add(swiperName, 'product');

  let sectionTitle = document.createElement('h2');
  sectionTitle.classList.add(swiperName, 'product__title');

  let slider = document.createElement('div');
  slider.classList.add('swiper-container', 'product__slider--' + swiperName);

  let wrapper = document.createElement('div');
  wrapper.classList.add('swiper-wrapper');

  section.appendChild(sectionTitle);
  section.appendChild(slider);
  slider.appendChild(wrapper);
  mainContainer.appendChild(section);

  productObj[swiperName].map((p) => {
    let productContainer = document.createElement('div');
    productContainer.setAttribute('class', 'swiper-slide product__img');

    let productTitle = document.createElement('h2');
    productTitle.classList.add(swiperName, 'product__title');
    productTitle.innerText = p.title;
    productContainer.appendChild(productTitle);

    let productImg = document.createElement('img');
    productImg.setAttribute('class', swiperName); // Pour arreter le slider onClick
    productImg.setAttribute('id', p.id);
    productImg.setAttribute('src', p.img);

    productContainer.appendChild(productImg);
    wrapper.appendChild(productContainer);
  });
};
// TODO make the pagiation
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
  // breakpoints: {}  ==> Peut remplacer les mediaQueries ou onResize()
};

// Creation des swipers par catégorie
const monthlySwiper = new Swiper('.product__slider--monthly', swiperConf);
const whiskySwiper = new Swiper('.product__slider--whisky', swiperConf);
const rhumSwiper = new Swiper('.product__slider--rhum', swiperConf);
const wineSwiper = new Swiper('.product__slider--wine', swiperConf);
const tapasSwiper = new Swiper('.product__slider--tapas', swiperConf);
