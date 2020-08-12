function Pokemon(ime, vrsta, sposobnosti, karakteristike, slika) {
    (this.ime = ime),
      (this.vrsta = vrsta),
      (this.sposobnosti = sposobnosti),
      (this.karakteristike = karakteristike),
      (this.slika = slika);
  }
  
   function Stats(napad, odbrana, brzina) {
    (this.napad = napad), (this.odbrana = odbrana), (this.brzina = brzina);
  };
  
  const pokemonNames = {
    PIKACU: 'pikacu',
    LUCARIO: 'lucario',
    CHARIZARD: 'charizard',
    SNORLAX: 'snorlax'
  
  }
  
  
  function createPokemon(pokemonName){
         if(pokemonName === pokemonNames.PIKACU)  
         {
           let pikacuStats = new Stats(35, 300, 2);
           let pikacu = new Pokemon(
             "Pikacu",
             "elektricni",
             ["staticki elektricitet", "Rapid Dash"],
             pikacuStats,
             "slike/pikacu.png"
           );
  
           return pikacu
  
         } else if(pokemonName === pokemonNames.LUCARIO){
           let lucarioStats = new Stats(45, 200, 1.7);
           let lucario = new Pokemon(
             "Lucario",
             "metalni",
             ["inner Focus", "Steadfast"],
             lucarioStats,
             "slike/Lucario.png"
           );
           return lucario;
         } else if(pokemonName === pokemonNames.CHARIZARD){
          let charizadStats = new Stats(40, 250, 1.5);
          let charizard = new Pokemon(
            "Charizard",
            "Vatreni",
            ["Blaze", "Fire-Punch"],
            charizadStats,
            "slike/Charizard.png"
          );
          return charizard
         }else if (pokemonName === pokemonNames.SNORLAX){
          let snorlaxStats = new Stats(25, 600, 1.2);
          let snorlax = new Pokemon(
            "Snorlax",
            "Normal",
            ["Immunity", "Thick Fat"],
            snorlaxStats,
            "slike/snorlax.png"
          );
          return snorlax
         }
  }
  
  let allPokemons = []
  
  let pikacu = createPokemon(pokemonNames.PIKACU);
  allPokemons.push(pikacu);
  let lucario = createPokemon(pokemonNames.LUCARIO);
  allPokemons.push(lucario);
  let charizard = createPokemon(pokemonNames.CHARIZARD);
  allPokemons.push(charizard);
  let snorlax = createPokemon(pokemonNames.SNORLAX);
  allPokemons.push(snorlax);

  
  
  export { allPokemons }
  
  
  // function pokemoni (...pok){
  
  // allPokemons.push(pok)
  // return allPokemons
  // }
  
  // console.log(pokemoni(pikacu,lucario,charizard,snorlax))
  
  


