//TIEMPO EN MOSTRAR EL SALUDO(3s)
const myTimeout = setTimeout(mostrarSaludo, 3000);
//GUARDAMOS EN VARIABLES OBJETOS RECOGIDOS POR EL ID
var musica = document.getElementById("musica");
var estrella = document.getElementById("estrella");
var campana1 = document.getElementById("campana1");
var campana2 = document.getElementById("campana2");
//IYECTAMOS ESTILOS CSS A ELEMENTOS DE LA POSTAL
campana2.style.cssText=" display: flex;position: absolute;height: 150px;width: 150px;margin-bottom: 90vh;margin-left: 40%;display: flex;position: absolute;animation-name: rotate;animation-duration: 1.5s;animation-iteration-count: infinite;";
campana1.style.cssText="display: flex;position: absolute;height: 150px;width: 150px;margin-bottom: 90vh;margin-right: 40%;display: flex;position: absolute;animation-name: spin;animation-duration: 1.5s;animation-iteration-count: infinite;";
estrella.style.cssText = "height: 100px; width: 100px;  margin-bottom: 100px;position: absolute; animation-name: parpadeo; animation-duration: 1s; animation-timing-function: linear; animation-iteration-count: infinite; -webkit-animation-name:parpadeo; -webkit-animation-duration: 1s; -webkit-animation-timing-function: linear; -webkit-animation-iteration-count: infinite;";
//FUNCION QUE HACE VISIBLE LA FELICITACION Y EL NOMBRE
function mostrarSaludo() {
  document.getElementById("felicidades").style.visibility = "visible";
  document.getElementById("nombre").style.visibility = "visible";
}


//OCULTAR SALUDO AL HACER CLICK EN EL BODY Y REPRODUCE LA MUSICA
let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);

//FUNCION QUE OCULTA LA FELICITACION Y EL NOMBRE ADEMAS DE REPRODUCIR MUSICA
function ocultarSaludo() {
    document.getElementById("felicidades").style.visibility="hidden";
    document.getElementById("nombre").style.visibility="hidden";
musica.play();
  }