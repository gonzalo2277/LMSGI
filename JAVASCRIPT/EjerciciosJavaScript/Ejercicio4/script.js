const list = document.getElementById("lista");
const añadir = document.getElementById("agregar");

añadir.addEventListener("click", añadido);

function añadido(){
    const nuevo = document.getElementById("li");
    nuevo.textContent="Hola Mundo";
    añadir.appendChild(nuevo);
}

