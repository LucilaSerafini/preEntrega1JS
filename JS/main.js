// Saludo de bienvenida 

console.log('Bienvenido a la juegoteca Mulán!')


//Array de juegos disponibles

const juegosDeCartas = ['UNO', 'Dables', 'Dígalo con memes', 'Munchkin', 'Catan'];
const juegosDeTablero = ['Kingdomino', 'BurakoRummy', 'TEG', 'Monopoly', 'El Estanciero'];

//Mostrar juegos disponibles

function mostrarJuegosDisponibles(tipoDeJuego) {
    if (tipoDeJuego === null) {
        alert('Vuelvas prontos');
        return;
    }
    switch (tipoDeJuego.toLowerCase()) {
        case 'tablero':
            console.log('Los juegos de tablero disponibles son:');
            for (let i = 0; i < juegosDeTablero.length; i++) {
                console.log(i + 1 + '. ' + juegosDeTablero[i]);
            }
            break;
        case 'cartas':
            console.log('Los juegos de cartas disponibles son:');
            for (let i = 0; i < juegosDeCartas.length; i++) {
                console.log(i + 1 + '. ' + juegosDeCartas[i]);
            }
            break;
        default:
            alert('Lo sentimos, el juego ingresado no es válido. Por favor, vuelva a intentarlo.');
    }
}

const tipoDeJuego = prompt('¿Qué tipo de juego desea ver? ¿Tablero o cartas?');
mostrarJuegosDisponibles(tipoDeJuego);

//Selección de juego 

const seleccionDeJuego = prompt('Por favor, indique el juego a adquirir');

if ((seleccionDeJuego >= 1) && (seleccionDeJuego <= juegosDeCartas.length) && (seleccionDeJuego <= juegosDeTablero.length)) {
    const juegoSeleccionado = seleccionDeJuego;

    const confirmar = confirm('¿Desea agregar al carrito el juego seleccionado: ' + juegoSeleccionado);
    if (confirmar) {
        alert('El juego seleccionado n°' + juegoSeleccionado + ' se agregó exitosamente al carrito de compras. ');
    } else {
        alert('El juego seleccionado no se ha agregado al carrito');
    }
} else {
    alert('No se detectó ningún ingreso.')
}