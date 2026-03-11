const box = document.getElementById("caja");
const boton = document.getElementById("color");

boton.addEventListener("click", cambio);

function cambio(){
    box.style.color="white";
    document.body.style.backgroundColor="blue";
}