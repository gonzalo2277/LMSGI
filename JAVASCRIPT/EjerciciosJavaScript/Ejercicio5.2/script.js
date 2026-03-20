const entrada = document.getElementById('entrada');
const boton1 = document.getElementById('agregar');
const tareas = document.getElementById('lista');


boton1.addEventListener("click", agregar);


function agregar() {
    const litarea = document.createElement("li");
    
    litarea.textContent = entrada.value;

    const completada = document.createElement("input");
    completada.type="checkbox";

    const borrar = document.createElement("button");
    borrar.textContent = "x";
    
    tareas.appendChild(litarea);
    litarea.appendChild(completada);
    litarea.appendChild(borrar);
    
    borrar.addEventListener("click", function(){
        borrarTarea(litarea);
    });
}

function borrarTarea(litarea){
    litarea.remove();
}

