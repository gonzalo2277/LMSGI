const entrada = document.getElementById('nombre');
const boton = document.getElementById('enviar');

boton.addEventListener('click', enviar);

function enviar(){
    if (entrada.value === ""){
        alert("El campo no puede estar vacio")
    }
}