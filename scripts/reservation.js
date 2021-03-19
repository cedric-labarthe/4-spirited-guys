function init() {

    const calendar = document.querySelector(".calendar");
    const popin = document.querySelector(".resaPopup");
    const burger = document.querySelector("#burgerIcon");

    const inputDate = document.querySelector("#date")
    const inputHowMany = document.querySelector("#howMany")
    const inputHour = document.querySelector("#hour")
    const inputLastName = document.querySelector("#lastName")
    const inputPhone = document.querySelector("#phone")
    const inputEmail = document.querySelector("#email")
    const buttonval = document.querySelector("#btn-form")
    //up : élément à cacher lors de l'envoi + down : afficher element
    const valp1 = document.querySelector("#val-p1")
    const valp2 = document.querySelector("#val-p2")
    const valok = document.querySelector("#val-ok")

    calendar.addEventListener('click', togglePopin);

    function togglePopin() {

        popin.classList.toggle("popinOn")

    }



    popin.addEventListener('click', (evt) => { clickOnPopinContainer(evt) });

    clickOnPopinContainer = (e) => {
        if (e.target === e.currentTarget) {
            togglePopin();
        }
    }

    burger.addEventListener('click', burgerClosesPopin)

    function burgerClosesPopin() {
        if (!popin.classList.contains("popinOff")) {
            togglePopin();
        }
    }

    buttonval.addEventListener('click', hideForm)

    function hideForm() {
        inputDate.classList.toggle("resaValHidden");
        inputHowMany.classList.toggle("resaValHidden");
        inputHour.classList.toggle("resaValHidden");
        inputLastName.classList.toggle("resaValHidden");
        inputPhone.classList.toggle("resaValHidden");
        inputEmail.classList.toggle("resaValHidden");
        buttonval.classList.toggle("resaValHidden");
    }

}

window.addEventListener("load", init)