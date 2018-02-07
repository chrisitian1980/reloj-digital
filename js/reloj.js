
//Esto se ejecuta cuando se termina de cargar todo//
//Garantizando su funcionamiento//
var fecha;
var temas = [
  "https://bootswatch.com/4/lumen/bootstrap.css",
  "https://bootswatch.com/4/cyborg/bootstrap.css"
];
function escribirFecha (){
  // va a poner fecha
  fecha = new Date();
  $("#horas").text(fecha.getHours() );
  $("#minutos").text(fecha.getMinutes() );
  $("#segundos").text(fecha.getSeconds() );

  // dia es de las 6 hasta las 18:00
  if(
    fecha.getHours() >= 6 &&
    fecha.getHours() <= 18
  ){
    $("#tema").attr("href", temas[0])
  }else {
    $("#tema").attr("href", temas[1])

  }
}
$(document).ready(function(){

  escribirFecha();
  setInterval( function(){
    escribirFecha();
    console.info("Escribiendo Fecha");
  }, 1000);

  //alert("Ya se cargo todo bien=");
});
