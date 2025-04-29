// CODIGO PARA EL BOTON DE BUSCAR POKEMON YA SEA POR NOMBRE O POR ID.

document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos
    const intputBuscar = document.getElementById("pokemonValue");
    const botonBuscar = document.getElementById("btnBuscar");
    
    // Agregar un evento de clic al botón
    botonBuscar.addEventListener("click", function(event) {

        event.preventDefault();
 
        const pokemonBuscado = intputBuscar.value;
        const mostrarModal = document.getElementById('mostrarModal');

        // PARA VALIDAR QUE RECIBIMOS LA INFO COLOCADA EN EL BUSCADOR.
        // alert("Valor ingresado: " + pokemonBuscado);

        // El campo no puede estra vacio o ser null o tener solo espacios en blanco.
        if (pokemonBuscado == null || pokemonBuscado.trim() === '') {
            alert(`Este campo no puede ir vacio. Favor de ingresar el "ID" o el "Nombre" del pokemon a buscar.`);
        } else {
            mostrarModal.click();
            cargarPokemonFicha(pokemonBuscado); 
        }

        
    });

    // Agregar evento para solucionar bug del boton enter en el campo de búsqueda
    intputBuscar.addEventListener("keypress", function(event) {
        // Si la tecla presionada es Enter (código 13)
        if (event.key === "Enter") {
            // Prevenir el comportamiento por defecto
            event.preventDefault();
            // Simular clic en el botón de búsqueda
            botonBuscar.click();
        }
    });
});