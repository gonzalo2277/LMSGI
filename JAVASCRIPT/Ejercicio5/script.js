const contador = document.getElementById("contador");
const sumar = document.getElementById("+");
const restar = document.getElementById("-");
const reset = document.getElementById("reiniciar");

sumar.addEventListener("click", suma);
restar.addEventListener("click", resta);
reset.addEventListener("click", borrar);

let valor = 0;

function suma(){
    valor++;
    contador.textContent = valor;
}

function resta(){
    valor--;
    contador.textContent = valor;
}

function borrar(){
    valor = 0;
    contador.textContent = valor;
}