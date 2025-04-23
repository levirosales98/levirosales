// Se agrega el footer al div
const fecha = new Date();
var footer = "Copyright © " + fecha.getFullYear() + " Leví Rosales. All Rights Reserved.";
document.getElementById("DevuelveTextoFooterConAnio").innerHTML = footer;

const fechaNacimiento = new Date(1998, 1, 23); // Mes 1 es febrero (los meses van de 0 a 11)
const hoy = new Date();

let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
const mes = hoy.getMonth() - fechaNacimiento.getMonth();
const dia = hoy.getDate() - fechaNacimiento.getDate();

// Si el mes actual es anterior al mes de nacimiento
// o si es el mismo mes pero el día aún no ha llegado, restamos un año
if (mes < 0 || (mes === 0 && dia < 0)) {
  edad--;
}

var bienvenida = "¡Hola! Que bueno que visites mi sitio web. Mi nombre es Leví Rosales, tengo " + edad + " años y soy de Guatemala; en este espacio puedes saber más de mi, que me gusta, que estudio y en que trabajo. Te dejo un formulario al cual puedes acceder rápidamente desde arriba si te interesa contactarme. Disfruta navegar por aquí 😃"
document.getElementById("DescripcionBienvenida").innerHTML = bienvenida;