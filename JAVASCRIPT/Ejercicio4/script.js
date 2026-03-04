const carrusel = document.getElementsByClassName("imagen");
const b1 = document.getElementById('boton1');
const b2 = document.getElementById('boton2');
const b3 = document.getElementById('boton3');

b1.addEventListener("click", mostrar1);

b2.addEventListener("click", mostrar2);

b3.addEventListener("click", mostrar3);

function mostrar1() {
    for (i = 0; i < carrusel.length; i++) {
        carrusel[i].style.display = "none";
    }

    carrusel[0].style.display = "block";
}

function mostrar2() {
    for (i = 0; i < carrusel.length; i++) {
        carrusel[i].style.display = "none";
    }

    carrusel[1].style.display = "block";
}

function mostrar3() {
    for (i = 0; i < carrusel.length; i++) {
        carrusel[i].style.display = "none";
    }

    carrusel[2].style.display = "block";
}