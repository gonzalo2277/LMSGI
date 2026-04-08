const lista = document.getElementById("lista");
const agregar = document.getElementById("agregar");
let contador = 2;

agregar.addEventListener("click", agrega);

function agrega() {
    const nuevo = document.createElement("li");
    contador++;
    nuevo.textContent = "Elemento " + contador;
    lista.appendChild(nuevo);

    nuevo.addEventListener("click", function() {
        nuevo.remove();
    })
}