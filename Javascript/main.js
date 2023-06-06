function generarGato (){
    let imagen = document.createElement("img");
    let contenedor = document.getElementById("contenedor");
    imagen.src = "gato.jpeg";
    contenedor.appendChild(imagen);
}