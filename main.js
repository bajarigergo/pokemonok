import Pokemon from "./Pokemon.js";

let pok1 = new Pokemon(
    "Ditto",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "Jó esős reggelt",
    $(".pokemonok")
)
let pok2 = new Pokemon(
    "Charizard",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "Jó esős reggelt",
    $(".pokemonok")
)
//pok1.nev="DIIITTTTOOOO"
//pok1.szerep="harcos"
delete pok1.mondat
console.log(pok1);
console.log(pok2);
pok1.mondat="Hurrá elállt az eső"


console.log(pok1);
console.log(pok2);

