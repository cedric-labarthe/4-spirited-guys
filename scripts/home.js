let topVisible = false;
let bottomVisible = true;
let swiper =null;

init = () => {
    document.addEventListener("scroll", handleScroll);

    if(window.location.pathname === "/index.html") {
        swiper = new Swiper('.swiper-container', {
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
}

setScrollInfoVisibility = () => {
    document.getElementById("topInfo").style.visibility = 'hidden';
    document.getElementById("bottom").style.visibility = 'visible'
}

handleScroll = (e) => {
    console.log("scroll")
    let scrollPosition = getScrollPercent();
    let topScrollInfo = document.getElementById("topInfo");
    let bottomScrollInfo = document.getElementById("bottomInfo");

    if(scrollPosition > 0 && !topVisible) {
    console.log("scroll")

        topScrollInfo.classList.add("infoVisible");
        topVisible = true;
    } else if (scrollPosition <= 0 && topVisible) {
        console.log("scroll 0")  
        topScrollInfo.classList.remove("infoVisible");
        topVisible = false;
    }

    if(scrollPosition < 100 && !bottomVisible) {
        bottomScrollInfo.style.visibility = "visible";
        bottomScrollInfo.classList.add("infoVisible");
        bottomVisible = true;
    } else if (scrollPosition >= 100 && bottomVisible) {
        console.log("scroll 100")
        bottomScrollInfo.classList.remove("infoVisible");
        bottomVisible = false;
        setTimeout(() => {
            bottomScrollInfo.style.visibility = "hidden";
        }, 500);
    }
}

getScrollPercent = () => {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

window.addEventListener('load', init);
