const numeroSecreto = Math.floor(Math.random() * 11)
const boton = document.getElementById('button');
const entrada = document.getElementById("entrada");

boton.addEventListener("click", adivinar);

let intentos = 0;

function adivinar() {
intentos ++;
    if (entrada.value == numeroSecreto) {
        document.getElementById("mensaje").textContent = "Correcto  ¡Has acertado!";
        document.getElementById("intento").textContent = "El número de intentos es:" + intentos;
    }else if(entrada.value > numeroSecreto){
        document.getElementById("mensaje").textContent = "el numero secreto es mas pequeño";
        document.getElementById("intento").textContent = "El número de intentos es:" + intentos;
    }else if(entrada.value < numeroSecreto){
        document.getElementById("mensaje").textContent = "el numero secreto es mas grande";
        document.getElementById("intento").textContent = "El número de intentos es:" + intentos;
    }
}