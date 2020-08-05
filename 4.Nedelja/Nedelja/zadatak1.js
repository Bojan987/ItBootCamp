// Kod od srede

function Pokemon(ime, vrsta, sposobnosti, karakteristike,slika) {
    this.ime = ime, 
    this.vrsta = vrsta, 
    this.sposobnosti = sposobnosti,
    this.karakteristike = karakteristike,
    this.slika = slika
}

let Stats = function (napad, odbrana, brzina) {
    this.napad = napad,
    this.odbrana = odbrana,
    this.brzina = brzina;
};


let pikacuStats = new Stats(55, 30, 90);
let pikacu = new Pokemon(
    "Pikacu",
    "elektricni",
    ["staticki elektricitet", "Rapid Dash"],
    pikacuStats,
    "slike/pikacu.png"
);

let lucarioStats = new Stats(45, 29, 135);
let lucario = new Pokemon(
    "Lucario",
    "metalni",
    ["inner Focus", "Steadfast"],
    lucarioStats,
    "slike/Lucario.png"
);

let charizadStats = new Stats(39, 80, 23);
let charizard = new Pokemon(
    "Charizard",
    "Vatreni",
    ["Blaze", "Fire-Punch"],
    charizadStats,
    "slike/Charizard.png"
);

let snorlaxStats = new Stats(25, 200, 25);
let snorlax = new Pokemon(
    "Snorlax",
    "Normal",
    ["Immunity", "Thick Fat"],
    snorlaxStats,
    "slike/snorlax.png"
);

let pokemons = [];
pokemons.push(pikacu, lucario, charizard, snorlax);

//************ Nedelja **************

function fight(pikapika) {
    let napadi = pikapika
        .map((a) => a.karakteristike.napad)
        .sort((a, b) => b - a);
    console.log(napadi);
    let pobednik = pikapika.filter((a) => a.karakteristike.napad === napadi[0]);
    //   console.log(pobednik)
    return pobednik;
}

console.log(fight(pokemons));

// DOM

let prikaziPokemone = document.querySelector("#prikaz");
let prikaziNajjacegPokemona = document.querySelector("#pobednik");
let wrapper = document.querySelector(".wrapper");


wrapper.addEventListener("click", e=>{

    let div1wrapp = document.createElement("div");
    div1wrapp.classList.add("prikaz");
    let div2wrapp = document.createElement("div");
    div2wrapp.classList.add("najjaci");
    let contentWrapper = document.createElement("div");
    contentWrapper.classList.add("contentWrapper");

    div1wrapp.append(prikaziPokemone, contentWrapper);
    div2wrapp.appendChild(prikaziNajjacegPokemona);

    // onde ta dva diva sa dugmicima appendujem na wrapp koji mi je u html i treci za kontent

    wrapper.appendChild(div1wrapp);
    wrapper.appendChild(div2wrapp);

    console.log(e.target);
    //ako kliknem bas na prikaz dugme
    if (e.target === prikaziPokemone) {
        
      

        pokemons.forEach((a) => {
            let divContent = document.createElement("div");
            divContent.classList.add("content");
            contentWrapper.appendChild(divContent);
            let img = document.createElement("img");
            img.src = a.slika;
            img.classList.add("rounded-circle", "img");

            let p1 = document.createElement("p");
            p1.textContent = "Ime pokemona: " + a.ime;
            let p2 = document.createElement("p");
            p2.textContent = "Vrsta pokemona: " + a.vrsta;

            divContent.append(img, p1, p2);

            let ul1 = document.createElement("ul");
            ul1.textContent = "Sposobnosti pokemona: ";

            let li1 = document.createElement("li");
            li1.textContent = "1) " + a.sposobnosti[0];

            let li2 = document.createElement("li");
            li2.textContent = " 2) " + a.sposobnosti[1];

            divContent.appendChild(ul1);
            ul1.append(li1, li2);

            let ul2 = document.createElement("ul");
            ul2.textContent = "Karakteristike pokemona: ";
            let li3 = document.createElement("li");
            li3.textContent = "napad :" + a.karakteristike.napad;

            let li4 = document.createElement("li");
            li4.textContent = "odbrana :" + a.karakteristike.odbrana;

            let li5 = document.createElement("li");
            li5.textContent = "brzina :" + a.karakteristike.brzina;

            divContent.appendChild(ul2);
            ul2.append(li3, li4, li5);
        });
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }

},{once:true});
