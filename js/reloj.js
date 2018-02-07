
//Esto se ejecuta cuando se termina de cargar todo//
//Garantizando su funcionamiento//
var fecha;
function escribirFecha (){
  // va a poner fecha
fecha = new Date();
  $("#horas").text(fecha.getHours() );
  $("#minutos").text(fecha.getMinutes() );
  $("#segundos").text(fecha.getSeconds() );


}
$(document).ready(function(){

  escribirFecha();
  setInterval( function(){
     escribirFecha();
console.info("Escribiendo Fecha");
}, 1000);

//alert("Ya se cargo todo bien=");
});
