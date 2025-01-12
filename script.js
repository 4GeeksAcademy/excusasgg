let quienes = ['Mi perro', 'Mi abuela', 'El cartero', 'Mi pájaro', 'El vecino'];
let acciones = ['rompió', 'comió', 'perdió', 'escondió', 'robó'];
let cosas = ['mi tarea', 'mi teléfono', 'el coche', 'las llaves', 'mi cuaderno'];
let cuando = ['ayer', 'esta mañana', 'mientras dormía', 'durante el almuerzo', 'mientras rezaba'];


function obtenerElementoAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}


const excusa = `${obtenerElementoAleatorio(quienes)} ${obtenerElementoAleatorio(acciones)} ${obtenerElementoAleatorio(cosas)} ${obtenerElementoAleatorio(cuando)}.`;


document.getElementById('excusa').textContent = excusa;