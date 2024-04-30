/// Fecha de la celebración
var fechaCelebracion = new Date("2024-07-27T00:00:00");
fechaCelebracion.setHours(13);

// Función para calcular y mostrar el tiempo restante
function mostrarTiempoRestante() {
  var ahora = new Date();
  var tiempoRestante = fechaCelebracion - ahora;

  var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;
}

// Actualizar el tiempo restante cada segundo
setInterval(mostrarTiempoRestante, 1000);

// Mostrar el tiempo restante al cargar la página
mostrarTiempoRestante();