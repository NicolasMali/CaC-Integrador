var categoria = document.getElementById("miCategoria");
var porcentaje= 0

function handleSelectChange() {
  var opcionPorcentaje = categoria.value;
  

  if (opcionPorcentaje === "estudiante") {
    porcentaje = 80;
  } else if (opcionPorcentaje === "trainee") {
    porcentaje = 50;
  } else if (opcionPorcentaje === "junior") {
    porcentaje = 15;
  }
}

categoria.addEventListener("change", handleSelectChange);

const form = document.getElementById('descuentoForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var cant = parseFloat(document.getElementById('cantidad').value)

  if (isNaN(cant) || cant < 1) {
    resultado.innerHTML = "Ingresa una cantidad válida.";
    return;
  }

  var valorTotalEntrada = cant*200

  var descuento = valorTotalEntrada * (porcentaje / 100);
  var precioConDescuento = valorTotalEntrada - descuento;

  resultado.innerHTML = precioConDescuento;
})