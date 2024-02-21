let btn_modal1 = document.getElementById("open-modal1")
let btn_modal2 = document.getElementById("open-modal2")
let btn_close1 = document.getElementById("close-modal1")
let btn_close2 = document.getElementById("close-modal2")

let modal1 = document.getElementById("modal1")
let modal2 = document.getElementById("modal2")

//abrir modals
btn_modal1.onclick = function() {
    modal1.style.display = "block"
}

btn_modal2.onclick = function() {
    modal2.style.display = "block"
}

//cerrar modals
btn_close1.onclick = function() {
    modal1.style.display = "none"
}

btn_close2.onclick = function() {
    modal2.style.display = "none"
}