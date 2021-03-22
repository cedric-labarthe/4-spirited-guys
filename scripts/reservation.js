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
    const labels = document.querySelectorAll("label")
    const howManyContainer = document.querySelector(".howManyContainer")
    const hourContainer = document.querySelector(".hourContainer")

    const valp1 = document.querySelector("#val-p1")
    const valp2 = document.querySelector("#val-p2")
    const valok = document.querySelector("#val-ok")

    calendar.addEventListener('click', togglePopin);

    function togglePopin() {
        popin.classList.toggle("popinOff")
        popin.classList.toggle("popinOffEffect")
        popin.classList.toggle("popinOnEffect")

        if (popin.classList.contains("popinOff")) {
            setTimeout(() => {
                popin.classList.toggle("popinOff")
            }, 190);
            popin.classList.toggle("popinOff")
        }

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
        if (!inputLastName.value || !inputPhone.value || !inputEmail.value ) {
            alert("You must fill all the fields.")
        } else {

        inputDate.remove();
        inputHowMany.remove();
        inputHour.remove();
        inputLastName.remove();
        inputPhone.remove();
        inputEmail.remove();
        buttonval.remove();
        labels.forEach(label => label.remove());
        howManyContainer.remove();
        hourContainer.remove();
        valp1.classList.toggle("resaValHidden")
        valp2.classList.toggle("resaValHidden")
        valok.classList.toggle("resaValHidden")
        }
    }

    valok.addEventListener('click', reloadPage)

    function reloadPage() {
        window.close();
    }

}

window.addEventListener("load", init)