// CODIGO PARA OCULTAR LA LISTA DE LOS TIPOS DE POKEMONS
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos
    const enlaceMostrarLista = document.getElementById('mostrarLista');
    const divTiposPokemons = document.getElementById('tiposPokemons');
    const divtodos = document.getElementById('todos');
    const div = document.querySelector('.divTodos');
  

    // Agregar el evento click al enlace
    enlaceMostrarLista.addEventListener('click', function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        
        // Comprobar el estado actual de visualización del div que contiene los tipos de pokemons
        if (divTiposPokemons.style.display === 'none') {
            // Si está oculto, mostrarlo
            divTiposPokemons.style.display = 'block';
            div.style.marginTop = '0px';
            // divtodos.removeAttribute('hidden');

            // Cambia el texto del enlace
            enlaceMostrarLista.innerHTML = '<i class="fa-solid fa-list"></i> Ocultar lista';
        } else {
            // Si está visible, ocultarlo
            divTiposPokemons.style.display = 'none';
            div.style.marginTop = '100px';
            // divtodos.setAttribute('hidden', '');

            // Cambiar el texto del enlace
            enlaceMostrarLista.innerHTML = '<i class="fa-solid fa-list"></i> Mostrar lista';
        }
    });
});