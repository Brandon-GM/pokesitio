// CODIGO PARA MOSTRAR LA FICHA TECNICA DE UN POKEMON AL HACER CLICK EN EL BOTON DEL POKEMON

// Esperar a que el documento esté completamente cargado
document.addEventListener('click', function(event) {
    // Verificamos si el elemento clickeado o alguno de sus padres tiene la clase "botonPokemon"
    const botonClickeado = event.target.closest('.botonPokemon'); // Sirve para arreglar un problema de timing
    
    // Si encontramos un botón con la clase "botonPokemon"
    if (botonClickeado) {
        const valorBoton = botonClickeado.value; //Guardamos el valor de ID.
        const mostrarModal = document.getElementById('mostrarModal');

        //alert('Numero: #' + valorBoton );
        mostrarModal.click();
        cargarPokemonFicha(valorBoton);
    }
});
