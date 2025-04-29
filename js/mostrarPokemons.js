// ESTE CPDIGO MUESTRA EN LA PAGINA TODOS LOS POKEMONS DE LA PRIMERA GENERACION
//  NOTA SE PUEDEN PONER MAS POKEMONS HAY QUE CAMBIAR EL VALOR DE 151 POR UN NUMERO MAS GRANDE

const listaPokemon = document.querySelector("#listaPokemon");
const botonesTipos = document.querySelectorAll(".btnTipo");
const btnMostrarTodos = document.getElementById('mostrarTodos');


let LINK = "https://pokeapi.co/api/v2/pokemon/";

// NOTA SI CAMBIAS EL "151" POR UN NUMERO MAS GRANDE SALDRAN MAS POKEMONS EN LA LISTA DE LA PAGINA,
for (let i = 1; i <= 151; i++) {
    fetch(LINK + i)
        .then((response) => response.json())
        .then(data => mostrarTodosPokemons(data))
}


function mostrarTodosPokemons(dataPokemon) {

    // Crear el botón donde estara el pokemon con ciertos atributos
    const boton = document.createElement('button');
    boton.style.display = 'block';
    boton.style.margin = '15px';
    boton.style.textAlign = 'center';
    boton.className = "botonPokemon " + `${dataPokemon.types.map(type => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(' ')}`;
    boton.type = "button";
    boton.value = `${dataPokemon.id}`


    // Añadir nombre y ID dentro de boton del pokemon
    boton.innerHTML = `${dataPokemon.name} #${dataPokemon.id}<br>`;

    // Crear imagen
    const imagen = document.createElement('img');
    imagen.src = dataPokemon.sprites.other["official-artwork"].front_default;
    imagen.alt = dataPokemon.name;
    imagen.style.width = '100px';
    imagen.style.marginBottom = '10px';

    // Añadir la imagen al botón
    boton.appendChild(imagen);
    
    // Añadir lo tipos dentro de un DIV
    let tipos = dataPokemon.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');
    const tipoTexto = document.createElement('div');
    tipoTexto.innerText = "<br>";
    tipoTexto.innerHTML = tipos;

    boton.appendChild(tipoTexto);


    // Agregar el botón al contenedor
    document.getElementById('listaPokemon').appendChild(boton);
}    

// Se ativa cuando se presiona algun boton de los tipos de pokemons (btnTipo) en la pagina.


botonesTipos.forEach(boton => boton.addEventListener("click", (event) => {
    //Sirve para guardar el id osea el texto del tipo de pokemon en una variable.
    let valorID = event.currentTarget.id;
    valorID = valorID.charAt(0).toUpperCase() + valorID.slice(1); // Convierte la primera letra en mayuscula

    
        // Selecciona todos los botones dentro del div listaPokemon
        const botonesDentroLista = document.querySelectorAll("#listaPokemon button");
    
            // Si no, ocultamos los que NO tengan la clase correspondiente
            botonesDentroLista.forEach(boton => {
                if (!boton.classList.contains(valorID)) {
                    boton.hidden = true;
                } else {
                    boton.hidden = false;
                }
            });
        
}
));

//Para mostar a todos los pokemones con el boton mostrar todo.
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón "Mostrar todos"
    const btnMostrarTodos = document.getElementById('mostrarTodos');
    
    // Agregar un evento de clic al botón
    btnMostrarTodos.addEventListener('click', function() {
        // Seleccionar todos los botones dentro del div con id "listaPokemon"
        const botones = document.querySelectorAll('#listaPokemon button');
        
        // Quitar el atributo hidden de cada botón
        botones.forEach(function(boton) {
            boton.removeAttribute('hidden');
        });
    });
});

