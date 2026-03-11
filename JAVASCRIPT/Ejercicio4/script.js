const carrusel = document.getElementsByClassName("imagen");
const b1 = document.getElementById('boton1');
const b2 = document.getElementById('boton2');
const b3 = document.getElementById('boton3');

b1.addEventListener("click", function(){mostrar(0)});

b2.addEventListener("click", function(){mostrar(1)});

b3.addEventListener("click", function(){mostrar(2)});

 for (i = 0; i < carrusel.length; i++) {
        carrusel[i].style.display = "none";
    }

function mostrar(index) {
    for (i = 0; i < carrusel.length; i++) {
        carrusel[i].style.display = "none";
    }

    carrusel[index].style.display = "block";
}