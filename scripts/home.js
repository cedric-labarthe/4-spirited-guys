let topVisible = false;
let bottomVisible = true;
let swiper =null;
let iconScrolltest = null;

init = () => {
    document.addEventListener("scroll", handleScroll);
    iconScrolltest = document.getElementById("iconScrollTest");
    if(window.location.pathname === "/index.html") {
        swiper = new Swiper('.swiper-container', {
            init: false,
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });
    }

    if(localStorage.getItem("cartOk") && window.location.pathname === "/index.html") {
        document.getElementById("purchaseOK").classList.add("present");
        setTimeout(() => {
            document.getElementById("purchaseOK").classList.remove("present");
            localStorage.removeItem("cartOk")
        }, 2000);
    }
    swiper.init();
}

setScrollInfoVisibility = () => {
    document.getElementById("topInfo").style.visibility = 'hidden';
    document.getElementById("bottom").style.visibility = 'visible'
}

handleScroll = (e) => {
    let scrollPosition = getScrollPercent();
    let topScrollInfo = document.getElementById("topInfo");
    let bottomScrollInfo = document.getElementById("bottomInfo");

   
    if(scrollPosition > 0 && !topVisible) {

        topScrollInfo.classList.add("infoVisible");
        topVisible = true;
    } else if (scrollPosition <= 0 && topVisible) {
        topScrollInfo.classList.remove("infoVisible");
        topVisible = false;
    }

    if(!isInViewport(iconScrolltest) && !bottomVisible) {
        bottomScrollInfo.style.visibility = "visible";
        bottomScrollInfo.classList.add("infoVisible");
        bottomVisible = true;
    } else if (isInViewport(iconScrolltest) && bottomVisible) {
        bottomScrollInfo.classList.remove("infoVisible");
        bottomVisible = false;
        setTimeout(() => {
            bottomScrollInfo.style.visibility = "hidden";
        }, 500);
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

getScrollPercent = () => {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

window.addEventListener('load', init);
