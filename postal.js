const myTimeout = setTimeout(mostrarSaludo, 3000);
function mostrarSaludo() {
    document.getElementById("felicidades").style.visibility="visible";
    document.getElementById("nombre").style.visibility="visible";
  }
  
  
  
  //OCULTAR SALUDO AL HACER CLICK EN EL BODY
  let body = document.querySelector("body");
  body.addEventListener("click", ocultarSaludo);
  
  function ocultarSaludo() {
      document.getElementById("felicidades").style.visibility="hidden";
      document.getElementById("nombre").style.visibility="hidden";
  
    }