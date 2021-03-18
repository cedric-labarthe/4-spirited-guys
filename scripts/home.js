let topVisible = false;
let bottomVisible = true;

onload = () => {
    document.addEventListener("scroll", handleScroll);
    console.log("onload home")
    // setScrollInfoVisibility();
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

    if(scrollPosition < 100 && !bottomVisible) {
        bottomScrollInfo.classList.add("infoVisible")
        bottomVisible = true;
    } else if (scrollPosition >= 100 && bottomVisible) {
        bottomScrollInfo.classList.remove("infoVisible")
        bottomVisible = false;
    }
    // if(scrollPosition === 100) {
    //     bottomScrollInfo.style.visibility = "hidden"
    // }
    // if(scrollPosition === 0) {
    //     topScrollInfo.style.visibility = "hidden"
    // }




}

getScrollPercent = () => {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}