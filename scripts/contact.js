const popin = document.querySelector(".hidden")
const btn = document.getElementById("btn-form")

btn.addEventListener("click", popMsg)

function popMsg() {
    popin.classList.toggle("popin")
}