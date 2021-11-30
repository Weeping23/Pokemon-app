import { pokemons } from "./data.js";

//Cogemos de nuestro documento el elemento modificable
let pokemonList = document.querySelector(".container")
//Imprimimos los valores de nuestro array en el documento
function printPokemon() {
    pokemons.results.forEach(element => {
        pokemonList.innerHTML += `<div class="footer-element">
        <div class="footer-element-contain">
            <img src="${element.sprites.front_default}" alt="">
        </div>
        <div class="footer-element-name">
            <h2>${element.name}</h2>
            <div class="footer-element-power">
            ${element.types[0].type.name}
            </div>
        </div>
        <button>></button>
      </div>`
    });
}
printPokemon()
//Definimos variables nulas de momento
let pokemonBuscado = null;
let pokemonQueCoincide = null;
//Define evento al hacer click 
let buscaralPokemon = document.getElementById("search_sub");
buscaralPokemon.addEventListener('click', buscarPokemon);

function buscarPokemon() {
    //Buscar con el valor que defina el usuario
    pokemonBuscado = document.getElementById("search").value;
    //Devueve lo que el usuario buscó
    pokemonQueCoincide = pokemons.results.find(element => element.name === pokemonBuscado)
    //Si no lo encuentra me imprime muestro un mensaje definido en nuestra condicional
    if (pokemonQueCoincide == undefined) {
        pokemonList.innerHTML =
            `<h1>${pokemonBuscado} no lo encontrarás en tu puta vida</h1>`
    }
    else {
        pokemonList.innerHTML = `
<div class="footer-element">
        <div class="footer-element-contain">
            <img src="${pokemonQueCoincide.sprites.front_default}" alt="">
        </div>
        <div class="footer-element-name">
            <h2>${pokemonQueCoincide.name}</h2>
            <div class="footer-element-power">
                ${pokemonQueCoincide.types[0].type.name}
            </div>
        </div>
        <button>></button>
    </div>`
    }
}
