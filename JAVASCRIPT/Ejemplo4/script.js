const tareas = document.getElementById('tareas');
const button = document.getElementById('agregar');
const entrada = document.getElementById('entrada');
/*const ptarea = document.createElement("p");
/*const button2 = document.getElementById('borrar');*/
const button3 = document.getElementById('cambiarcolor');

button.addEventListener('click', agregar);
/*button2.addEventListener('click', borrar);*/
button3.addEventListener('click', colorrojo);

function agregar() {
    const litarea = document.createElement("li");
    const node = document.createTextNode(entrada.value);
    /*ptarea.appendChild(node);*/
    litarea.appendChild(node);
    listatareas.appendChild(litarea);

     tareas.appendChild(ptarea);

    const enlace = document.createElement("a");
    const node2 = document.createTextNode("Enlace a..")
    enlace.appendChild(node2);
    enlace.setAttribute("href","https://www.ieszaidinvergeles.org");

    ptarea.appendChild(enlace);

    const imagen = document.createElement("img");
    tareas.appendChild(imagen);
    imagen.setAttribute("src","https://imgs.search.brave.com/sktqcHCJG5DcL6nyXlnRmhYF5ZIXijW8KTbSJRZBnL4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/Njk4NTAyMC9waG90/by9iYXJjZWxvbmEt/c3BhaW4tbGlvbmVs/LW1lc3NpLW9mLWZj/LWJhcmNlbG9uYS1s/b29rcy1vbi1kdXJp/bmctdGhlLWxhLWxp/Z2Etc2FudGFuZGVy/LW1hdGNoLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1TT1Zq/NzNIX2YzTnBmS3Jt/NTBuQnRVY1NPUDV4/QjhMOWFReUdOQVZN/Q2Z3PQ");
    
}

function borrar(){
    ptarea.remove();
}

function colorrojo(){
    const listatareasli = document.querySelectorAll("li");
    for (let i=0; i<listatareasli.length; i++){
        listatareasli[i].style.color="red";
    }
        
}