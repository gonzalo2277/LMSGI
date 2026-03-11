const texto = document.getElementById("mensaje");
const estado = document.getElementById("toggle");

estado.addEventListener("click", ocultar);

function ocultar(){
    if (texto.style.display != "none"){
        texto.style.display = "none"
    } else if (texto.style.display === "none") {
        texto.style.display  = "flex"
    }
}
