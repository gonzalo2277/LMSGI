const text = document.getElementById("texto");
const boton = document.getElementById("btn");

boton.addEventListener("click", cambiar);

function cambiar(){
    text.textContent="Soy Gonzalo";
}