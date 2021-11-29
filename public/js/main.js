import { pokemons } from "./data.js";


let pokemonList = document.querySelector(".container")
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

let pokemonBuscado = null;
let pokemonQueCoincide = null;
let buscaralPokemon = document.getElementById("search_sub");
buscaralPokemon.addEventListener('click', buscarPokemon);

function buscarPokemon() {

    pokemonBuscado = document.getElementById("search").value;
    pokemonQueCoincide = pokemons.results.find(element => element.name === pokemonBuscado)

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
