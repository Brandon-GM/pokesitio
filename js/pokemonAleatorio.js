// CODIGO PARA MOSTRAR DE MANERA ALEATORIA UN POKEMON
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos
    const modalLink = document.getElementById('pokemonAleatorio');
    const mostrarModal = document.getElementById('mostrarModal');
    
    // Abrir modal al hacer clic en el enlace
    modalLink.addEventListener('click', function(e) {
      e.preventDefault();
      mostrarModal.click();

      // NOTA: SOLO MOSTRARA DE FORMA ALEATORIA HASTA EL POKEMON 151 PERO SI SE PONE UN NUMERO MAS GRANDE MOSTRATA MAS.
      const totalPokemon = 151;
      const randomId = Math.floor(Math.random() * totalPokemon) + 1;

      //cargarPokemonAleatorio(randomId);
      cargarPokemonFicha(randomId);
    });
    
  });