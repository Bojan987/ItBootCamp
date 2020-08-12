import {allPokemons} from '/modules/pokemon-factory.js'
import {fight} from '/modules/strongest-pokemon.js'



// console.log(strongest)

function makeDiv (naziv){
    var div = document.createElement('div')
    div.classList.add(naziv)
    return div
    }
    

 export function DrawDom(){

    let strongest = fight(allPokemons)[0]

    const prikaziPokemone = document.querySelector("#prikaz")
    const prikaziNajjacegPokemona = document.querySelector("#pobednik")
    const wrapper = document.querySelector("#btnWrapper")
    const contentWrapp = document.querySelector('.contentWrap')
    const prikazWrap = makeDiv('prikazWrap')
    prikazWrap.style.display = "none"
    const pobednikWrap = makeDiv('pobednikWrap')
    pobednikWrap.style.display = "none"

    contentWrapp.append(prikazWrap,pobednikWrap)

    pobednikWrap.innerHTML= `<div class="card najjaci"><img class="card-img-top rounded-circle" src= ${strongest.slika} alt=""><div class="card-body"><h4 class="card-title  ">${strongest.ime}</h4><p class="card-text ">Vrsta pokemona:${strongest.vrsta}<br> Sposobnosti pokemona: 1) ${strongest.sposobnosti[0]}<br> 2)${strongest.sposobnosti[0]}<br> Karakteristike pokemona:<br>Napad-${strongest.karakteristike.napad}<br>Odbrana-${strongest.karakteristike.odbrana}<br>Brzina-${strongest.karakteristike.brzina}</p></div></div> ` 
   
    
    
    allPokemons.forEach(e => {
        let i = 0
        const newDiv = makeDiv('poks')
        prikazWrap.appendChild(newDiv)
        newDiv.innerHTML = `<div class="card card-${i}"><div class ="slikeKartica"> <img class="card-img-top rounded-circle" src= ${e.slika} alt=""></div><div class="card-body"><h4 class="card-title  ">${e.ime}</h4><p class="card-text ">Vrsta pokemona:${e.vrsta}<br> Sposobnosti pokemona: 1)${e.sposobnosti[0]}<br> 2) ${e.sposobnosti[1]}<br> Karakteristike pokemona:<br>Napad-${e.karakteristike.napad}<br>Odbrana-${e.karakteristike.odbrana}<br>Brzina-${e.karakteristike.brzina}</p></div></div> `    
        i++
    });

    prikaziPokemone.addEventListener('click', e=>{
       
        if (prikazWrap.style.display === "none")
        prikazWrap.style.display = "flex"
      else prikazWrap.style.display = "none"
      
      })

      prikaziNajjacegPokemona.addEventListener('click', e=>{
       
        if (pobednikWrap.style.display === "none")
        pobednikWrap.style.display = "block"
      else pobednikWrap.style.display = "none"
      
      })
    

 }
    // return {
    //     prikazi : prikaziPokemone,
    //     pobednik : prikaziNajjacegPokemona,
    //     wrap : wrapper,
    //     prikaz : prikazWrap,
    //     pobednik : pobednikWrap,
    //     contentWrap: contentWrapp

    // }
// }
// console.log(allPokemons)

// export function draw () {
//     let i = 0
//    MakeDom().contentWrap.appendChild(MakeDom().prikaz)
//    MakeDom().contentWrap.appendChild(MakeDom().pobednik)
//    MakeDom().prikaz.innerHTML = `<h1>Nesdto</h1>`
//     allPokemons.forEach(e => {
        

//         MakeDom().prikaz.innerHTML = `<h1>Nesdto</h1>`
//     });
// }





