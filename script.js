const myTimeout = setTimeout(mostrarSaludo, 3000);
var musica = document.getElementById("musica");
var estrella = document.getElementById("estrella");
var baston = document.getElementById("baston");

estrella.style.cssText = "height: 100px; width: 100px;  margin-bottom: 100px;position: absolute; animation-name: parpadeo; animation-duration: 1s; animation-timing-function: linear; animation-iteration-count: infinite; -webkit-animation-name:parpadeo; -webkit-animation-duration: 1s; -webkit-animation-timing-function: linear; -webkit-animation-iteration-count: infinite;";

function mostrarSaludo() {
  document.getElementById("felicidades").style.visibility = "visible";
  document.getElementById("nombre").style.visibility = "visible";
}


//OCULTAR SALUDO AL HACER CLICK EN EL BODY
let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);

function ocultarSaludo() {
    document.getElementById("felicidades").style.visibility="hidden";
    document.getElementById("nombre").style.visibility="hidden";
musica.play();
  }