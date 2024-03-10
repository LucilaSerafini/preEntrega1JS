// Saludo de bienvenida 

console.log('Bienvenido a la juegoteca Mulán!')


//Array de juegos disponibles

const juegosDisponibles = [
    {tipo: 'Cartas', nombre: 'UNO', precio: 3000},
    {tipo: 'Cartas', nombre: 'Dables', precio: 6000},
    {tipo: 'Cartas', nombre: 'Digalo con memes', precio: 20000},
    {tipo: 'Cartas', nombre: 'Munchkin', precio: 30000},
    {tipo: 'Tablero', nombre: 'Kingdomino', precio: 60000},
    {tipo: 'Tablero', nombre: 'Burako', precio: 20000},
    {tipo: 'Tablero', nombre: 'TEG', precio: 60000},
    {tipo: 'Tablero', nombre: 'Monopoly', precio: 80000},
    {tipo: 'Tablero', nombre: 'Estanciero', precio: 60000},
    {tipo: 'Tablero', nombre: 'Catan', precio: 60000},

]


// Mostrar juegos disponibles

const tipoDeJuego = prompt('¿Qué tipo de juego desea ver? ¿Tablero o cartas?');

const mostrarJuegosDisponibles = juegosDisponibles.filter ((juego) => juego.tipo.toLowerCase() === tipoDeJuego.toLowerCase());

if (mostrarJuegosDisponibles && mostrarJuegosDisponibles.length >0) {
    console.log ('Juegos disponibles: ')
    mostrarJuegosDisponibles.forEach ((juegoDisponible) => console.log (juegoDisponible.nombre));

} else {
    console.log ('No encontramos resultados para su búsqueda. Vuelva a intentarlo.')
}
  

//Selección de juego 

const seleccionDeJuego = prompt ('Por favor, ingrese el producto que desea adquirir.')

const juegoExistente = juegosDisponibles.some (juegoDisponible => juegoDisponible.nombre.toLowerCase() === seleccionDeJuego.toLowerCase());
  if (juegoExistente) {
      const confirmar = confirm('¿Desea agregar al carrito el juego seleccionado: ' + seleccionDeJuego + '?');
      if (confirmar) {
          alert('El juego ' + seleccionDeJuego + ' se agregó exitosamente al carrito de compras. ');
      } else {
          alert('El juego seleccionado no se ha agregado al carrito');
      }
}

function buscar() {
    //LEVANTAR EL VALOR DEL INPUT DEL DOM BUSCANDOLO POR SU ID

    const busqueda = document.getElementById ('busqueda');
    const randomId = Math.floor(Math.random() * 100000) + 1;
    localStorage.setItem(randomId, busqueda.value);


    //1. NO HAY NADA -> MSG INGRESE UN VALOR
    if (busqueda.value === "") {
        console.log ('Ingrese un valor');
    } else {
        let juegosFiltrados = juegosDisponibles.filter ((juego) => juego.nombre.toLowerCase() === busqueda.value.toLowerCase());
        if (juegosFiltrados.length > 0) {
            console.log('Se encontró el juego')
            juegosFiltrados.forEach ((juegoDisponible) => console.log ("Nombre: ", juegoDisponible.nombre + " - Precio: ", juegoDisponible.precio));
        } else {
            console.log('No se encontró el juego');
        }
    }
    //2. EL USUARIO INGRESO UN VALOR Y ENCONTRO COINCIDENCIAS
    
    //3. EL USUARIO INGRESO UN VALOR Y NO ENCONTRO
};