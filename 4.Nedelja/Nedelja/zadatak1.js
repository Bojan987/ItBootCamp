// Kod od srede

function Pokemon(ime, vrsta, sposobnosti, karakteristike, slika) {
  (this.ime = ime),
    (this.vrsta = vrsta),
    (this.sposobnosti = sposobnosti),
    (this.karakteristike = karakteristike),
    (this.slika = slika);
}

let Stats = function (napad, odbrana, brzina) {
  (this.napad = napad), (this.odbrana = odbrana), (this.brzina = brzina);
};

let pikacuStats = new Stats(35, 300, 2);
let pikacu = new Pokemon(
  "Pikacu",
  "elektricni",
  ["staticki elektricitet", "Rapid Dash"],
  pikacuStats,
  "slike/pikacu.png"
);

let lucarioStats = new Stats(45, 200, 1.7);
let lucario = new Pokemon(
  "Lucario",
  "metalni",
  ["inner Focus", "Steadfast"],
  lucarioStats,
  "slike/Lucario.png"
);

let charizadStats = new Stats(40, 250, 1.5);
let charizard = new Pokemon(
  "Charizard",
  "Vatreni",
  ["Blaze", "Fire-Punch"],
  charizadStats,
  "slike/Charizard.png"
);

let snorlaxStats = new Stats(25, 600, 1.2);
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

fight(pokemons);
let winner = fight(pokemons);
// console.log(winner[0].sposobnosti)

// Van domaceg!!!!

//attack je jednak jacini napada * brzina napada , pa proveravam koliko svako protiv svakoga mora da odradi napada da bi mu oduzeo sav health. Kome treba vise napada je izgubio

// let attackP = pikacuStats.napad * pikacuStats.brzina;
// let healthP = pikacuStats.odbrana;
// let attackL = lucarioStats.napad * lucarioStats.brzina;
// let healthL = lucarioStats.odbrana;
// let attackC = charizadStats.napad * charizadStats.brzina;
// let healthC = charizadStats.odbrana;
// let attackS = snorlaxStats.napad * charizadStats.brzina;
// let healthS = snorlaxStats.odbrana;
// console.log(
//   attackP,
//   healthP,
//   attackL,
//   healthL,
//   attackC,
//   healthC,
//   attackS,
//   healthS
// );

// function duel(att1, hp1, att2, hp2) {
//   let attNumber1 = hp2 / att1;
//   let attNumber2 = hp1 / att2;
//   if (attNumber1 > attNumber2) {
//     let hpLeft2 = hp2 - attNumber2 * att1;
//     return [
//       attNumber2,
//       hpLeft2,
//       ` ${attNumber2}. napad pobedio je protivnika. Preostalo Health-a : ${hpLeft2}`,
//     ];
//   } else {
//     let hpleft1 = hp1 - attNumber1 * att2;
//     return [
//       attNumber1,
//       hpleft1,
//       ` ${attNumber1}. napad pobedio je protivnika. Preostalo Health-a : ${hpLeft1}`,
//     ];
//   }
// }

// console.log(duel(attackP, healthP, attackS, healthS));






//// DOM ****DOMACI ZA NEDELJU *****

//Malo vise divova ubaceno zbog css

const telo = document.getElementsByTagName("BODY")[0];
const prikaziPokemone = document.querySelector("#prikaz");
const prikaziNajjacegPokemona = document.querySelector("#pobednik");
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (e) => {
  if (e.target === prikaziPokemone) {
    if (contentWrapper.style.display === "none")
      contentWrapper.style.display = "flex";
    else contentWrapper.style.display = "none";
  }

  if (e.target === prikaziNajjacegPokemona) {
    if (content1.style.display === "none") content1.style.display = "block";
    else content1.style.display = "none";
  }
});

// wrapper za sve sto je vezano za prvo dugme
const button1Wrapp = document.createElement("div");
button1Wrapp.classList.add("prikaz");

button1Wrapp.appendChild(prikaziPokemone);
wrapper.prepend(button1Wrapp);

// wrapper za content koji se dobija pritiskom na 1. dugme
let contentWrapper = document.createElement("div");
contentWrapper.classList.add("contentWrapper");

button1Wrapp.appendChild(contentWrapper);

// brojac za dodavanje razlicitih klasa svakom kontentu unutar contetWrappera
let i=0

let k = pokemons.forEach((a) => {
  //content koji se nalazi u content Wrapperu - slike , paragrafi , liste ,dugme
  let content = document.createElement("div");
  content.classList.add("content");

  contentWrapper.appendChild(content);
  let img = document.createElement("img");
  img.src = a.slika;
  img.classList.add("rounded-circle", "img");

  let p1 = document.createElement("p");
  p1.textContent = "Ime pokemona: " + a.ime;
  let p2 = document.createElement("p");
  p2.textContent = "Vrsta pokemona: " + a.vrsta;

  content.append(img, p1, p2);

  let ul1 = document.createElement("ul");
  ul1.textContent = "Sposobnosti pokemona: ";

  let li1 = document.createElement("li");
  li1.textContent = "1) " + a.sposobnosti[0];

  let li2 = document.createElement("li");
  li2.textContent = " 2) " + a.sposobnosti[1];

  ul1.append(li1, li2);
  content.appendChild(ul1);

  let ul2 = document.createElement("ul");
  ul2.textContent = "Karakteristike pokemona: ";
  let li3 = document.createElement("li");
  li3.textContent = "napad :" + a.karakteristike.napad;

  let li4 = document.createElement("li");
  li4.textContent = "odbrana :" + a.karakteristike.odbrana;

  let li5 = document.createElement("li");
  li5.textContent = "brzina :" + a.karakteristike.brzina;

  let btn1 = document.createElement("button");
  btn1.classList.add("btn", "btn-block", "btn-primary", "btn-" + i);
  btn1.textContent = "IZABERI POKEMONA";

  content.append(ul2, btn1);
  ul2.append(li3, li4, li5);

  // ovde sam svakom dugmetu dao drugaciji id
  btn1.setAttribute("id", "btn-" + i);

  // klikom na dugme izaberi pokemona , prikazuje  posebne div u kojima se nalazi ko je pobedio , svako protiv svakog
  let duelDivs = `<div class="card card-${i}"><div class ="slikeKartica"> <img class="card-img-top" src=${a.slika} alt=""><img class="card-img-top" src= "slike/mac.png" alt=""><img class="card-img-top" src= "slike/Lucario.png" alt=""></div><div class="card-body"><h4 class="card-title  ">Winner!</h4><p class="card-text ">Sa 3 udara pobedio. Preostalo health-a : 30</p></div></div> `;

  let duelDivs1 = `<div class="card card-${i}"><div class ="slikeKartica"> <img class="card-img-top" src= ${a.slika} alt=""><img class="card-img-top" src= "slike/mac.png" alt=""><img class="card-img-top" src= "slike/Charizard.png" alt=""></div><div class="card-body"><h4 class="card-title ">Loser!</h4><p class="card-text">Izgubio posle 4 udarca </p></div></div> `;

  let duelDivs2 =`<div class="card card-${i}"><div class ="slikeKartica"> <img class="card-img-top" src= ${a.slika} alt=""><img class="card-img-top" src= "slike/mac.png" alt=""><img class="card-img-top" src= "slike/snorlax.png" alt=""></div><div class="card-body"><h4 class="card-title  ">Loser!</h4><p class="card-text ">Izgubio posle 2 udarca</p></div></div> `;

  let duelDivs3 = `<div class="card card-${i}"><div class ="slikeKartica"> <img class="card-img-top" src= ${a.slika} alt=""><img class="card-img-top" src= "slike/mac.png" alt=""><img class="card-img-top" src= "slike/pikacu.png" alt=""></div><div class="card-body"><h4 class="card-title  ">Winner!</h4><p class="card-text ">Sa 3 udarca je pobedio.Preostalo health-a : 30 !</p></div></div> `;





  content.insertAdjacentHTML("beforeend", duelDivs);
  content.insertAdjacentHTML("beforeend", duelDivs1);
  content.insertAdjacentHTML("beforeend", duelDivs2);
  content.insertAdjacentHTML("beforeend", duelDivs3);


  // selektujem sve elemente koji imaju card-i clasu , dobijam node list
  let card = document.querySelectorAll(`.card-${i}`);

  // event listeneri za izbor pokemona i prikaz na klik divova iznad
  btn1.addEventListener("click", (ev) => {
    console.log(ev.target.id);
    if (ev.target.id === "btn-0") {
      console.log(card);
      //morao sam da loopujem kroz node list , jer ne mogu da menjam display , svim elementima u node listi odjednom :/
      card.forEach((s) => {
        if (s.style.display === "none") s.style.display = "flex";
        else s.style.display = "none";
      });
    }
    if (ev.target.id === "btn-1") {
      console.log(card);
      card.forEach((s) => {
        if (s.style.display === "none") s.style.display = "flex";
        else s.style.display = "none";
      });
    }

    if (ev.target.id === "btn-2") {
      console.log(card);
      card.forEach((s) => {
        if (s.style.display === "none") s.style.display = "flex";
        else s.style.display = "none";
      });
    }

    if (ev.target.id === "btn-3") {
      console.log(card);
      card.forEach((s) => {
        if (s.style.display === "none") s.style.display = "flex";
        else s.style.display = "none";
      });
    }
  });

  i += 1;
});
i = 0;

// DOMACI Drugo dugme

// wrapper za sve vezano za drugo dugme
let button2Wrapp = document.createElement("div");
button2Wrapp.classList.add("najjaci");

wrapper.appendChild(button2Wrapp);
button2Wrapp.appendChild(prikaziNajjacegPokemona);

//
let contentWrapper1 = document.createElement("div");
contentWrapper1.classList.add("contentWrapper1");

button2Wrapp.appendChild(contentWrapper1);

let content1 = document.createElement("div");
content1.classList.add("content1");

contentWrapper1.appendChild(content1);

//
let img1 = document.createElement("img");
img1.src = winner[0].slika;
img1.classList.add("rounded-circle", "img");

//winner je objekat ciji atribut ima najveci napad, tj pobednik

let p3 = document.createElement("p");
p3.textContent = "Ime pokemona: " + winner[0].ime;
let p4 = document.createElement("p");
p4.textContent = "Vrsta pokemona: " + winner[0].vrsta;

let ul3 = document.createElement("ul");
ul3.textContent = "Sposobnosti pokemona: ";

let li6 = document.createElement("li");
li6.textContent = "1) " + winner[0].sposobnosti[0];

let li7 = document.createElement("li");
li7.textContent = " 2) " + winner[0].sposobnosti[1];

let ul4 = document.createElement("ul");
ul4.textContent = "Karakteristike pokemona: ";
let li8 = document.createElement("li");
li8.textContent = "napad :" + winner[0].karakteristike.napad;

let li9 = document.createElement("li");
li9.textContent = "odbrana :" + winner[0].karakteristike.odbrana;

let li10 = document.createElement("li");
li10.textContent = "brzina :" + winner[0].karakteristike.brzina;

ul3.append(li6, li7);
ul4.append(li8, li9, li10);

content1.append(img1, p3, p4, ul3, ul4);
