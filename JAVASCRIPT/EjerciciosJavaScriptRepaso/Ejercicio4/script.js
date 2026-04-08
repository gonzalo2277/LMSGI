const boton = document.getElementById("boton");
const principal = document.getElementById("principal");
const nombre = document.getElementById("nombre");

boton.addEventListener("click", añadir);

function añadir(){
    let imagen = document.createElement("img");
    imagen.setAttribute("src", "imagen.png")
    principal.appendChild(imagen);

    let nom = document.createElement("p");
    nom.setAttribute("p")
    principal.appendChild(nom)
}