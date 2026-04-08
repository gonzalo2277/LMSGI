const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const reset = document.getElementById("reset");
const numero = document.getElementById("numero");

let contador = localStorage.getItem("contador");
numero.textContent = contador;
sumar.addEventListener("click", sumarnumero);
restar.addEventListener("click", restarnumero);
reset.addEventListener("click", resetnumero)

function sumarnumero() {
    contador++;
    localStorage.setItem("contador", contador);
    numero.textContent = contador;
}

function restarnumero() {   
    contador--;
    localStorage.setItem("contador", contador);
    numero.textContent = contador;
}

function resetnumero() {
    contador = 0;
    localStorage.setItem("contador", contador);
    numero.textContent = contador;
}