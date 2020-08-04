
let pokemonTeam = []

function Pokemon(ime,vrsta,sposobnosti,karakteristike){
    this.ime = ime,
    this.vrsta = vrsta,
    this.sposobnosti = sposobnosti
    this.karakteristike = karakteristike

}

let Stats = function (napad,odbrana,brzina){
    this.napad = napad,
    this.odbrana = odbrana,
    this.brzina = brzina
}

let pikacuStats = new Stats(55,30,90)
let pikacu = new Pokemon("Pikacu","elektricni",["staticki elektricitet", "Rapid Dash"],pikacuStats)

let lucarioStats = new Stats (45,29,135)
let lucario = new Pokemon("Lucario","metalni", ["inner Focus", "Steadfast"], lucarioStats)

let charizadStats = new Stats(39,80,23)
let charizard = new Pokemon( "Charizard", "Vatreni","Blaze", charizadStats )

let snorlaxStats = new Stats(25,200,25)
let snorlax = new Pokemon("Snorlax", "Normal", ["Immunity","Thick Fat"], snorlaxStats)



pokemonTeam.push(pikacu,lucario,charizard,snorlax)



 function ability(arr){
    niz = arr.map(e => e.sposobnosti).flat()
    return niz
   
    
}
console.log(ability (pokemonTeam))


pokemonTeam.sort((a,b) =>a.karakteristike.brzina - b.karakteristike.brzina )
// console.log(pokemonTeam)