// Se agrega el footer al div
const fecha = new Date();
var footer = "Copyright © " + fecha.getFullYear() + " Leví Rosales. All Rights Reserved.";
document.getElementById("DevuelveTextoFooterConAnio").innerHTML = footer;

var bienvenida = "¡Hola! Que bueno que visites mi sitio web. Mi nombre es Leví Rosales, tengo " + (fecha.getFullYear() - 1998) + " años y soy de Guatemala; en este espacio puedes saber más de mi, que me gusta, que estudio y en que trabajo. Te dejo un formulario al cual puedes acceder rápidamente desde arriba si te interesa contactarme. Disfruta navegar por aquí 😃"
document.getElementById("DescripcionBienvenida").innerHTML = bienvenida;