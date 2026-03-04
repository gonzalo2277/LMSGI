const numeroSecreto = Math.floor(Math.random() * 11)
const boton = document.getElementById('button');
const entrada = document.getElementById("entrada");

boton.addEventListener("click", adivinar);

function adivinar() {
    if (entrada.value == numeroSecreto) {
        document.getElementById("mensaje").textContent = "Correcto  ¡Has acertado!";
    }else if(entrada.value > numeroSecreto){
        document.getElementById("mensaje").textContent = "el numero secreto es mas pequeño";
    }else if(entrada.value < numeroSecreto){
        document.getElementById("mensaje").textContent = "el numero secreto es mas grande";
    }
}