// FUNCION PARA MOSTRAR LOS DATOS DEL POKEMON EN UNA FICHA TECNICA (DENTRO DE UNA VENTANA MODAL)
// FUNCIONA TANTO PARA POKEMON ALEATORIO | POKEMONS DE LISTADOS | BUSCADOR DE POKEMON
function cargarPokemonFicha(valorBoton) {

    const pokemonInfo = document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML = "<h4> ... Cargando por favor espere.</h4>";

      
    fetch(`https://pokeapi.co/api/v2/pokemon/${valorBoton}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener el Pokémon. Favor de validar que el "ID" o el "Nombre" del pokemon sean correctos.');
        }
        return response.json();
      })
      .then(dataPokemon => {
        // Llenamos todo excepto la descripción

        let tiposModal = dataPokemon.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</p>`);
        tiposModal = tiposModal.join('');

        pokemonInfo.innerHTML = `
          <h4 class="modalNegritas">${dataPokemon.name.charAt(0).toUpperCase() + dataPokemon.name.slice(1)}</h4>
          <img class="fondoRedondo" src="${dataPokemon.sprites.other['official-artwork'].front_default || dataPokemon.sprites.front_default}" alt="${dataPokemon.name}" width="150">
          <br> <br>
          <h6 class="modalNegritas">Número:</h6>
          <p class="fondoRedondo">#${dataPokemon.id}</p>
          <h6 class="modalNegritas">Tipo:</h6>
          <div>${tiposModal}</div>
          <h6 class="modalNegritas">Altura:</h6>
          <p class="fondoRedondo">${dataPokemon.height / 10} m</p>
          <h6 class="modalNegritas">Peso:</h6>
          <p class="fondoRedondo">${dataPokemon.weight / 10} kg</p>
          <h6 class="modalNegritas">Habilidad default:</h6>
          <p class="fondoRedondo">${dataPokemon.abilities[0].ability.name.charAt(0).toUpperCase() + dataPokemon.abilities[0].ability.name.slice(1).toLowerCase()}</p>
          <h6 class="modalNegritas">DESCRIPCIÓN DE LA POKEDEX:</h6>
          <p id="descripcion" class="fondoRedondo"></p>
        `;
  
        // Segunda petición para la descripción del pokemon de la POEDEX
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${dataPokemon.name}`)
          .then(response => response.json())
          .then(speciesData => {
            const flavorText = speciesData.flavor_text_entries.find(
              entry => entry.language.name === 'es'
            );
            const descripcion = flavorText ? flavorText.flavor_text.replace(/\f/g, ' ') : 'No disponible';
            document.getElementById('descripcion').innerHTML = `${descripcion}`;
          });
      })
      .catch(error => {
        pokemonInfo.innerHTML = `<h4 class="error">Error: ${error.message} </h4>`;
      });
  }