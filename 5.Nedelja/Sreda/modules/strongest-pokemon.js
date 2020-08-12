

  
  export function fight(pok) {
    let napadi = pok.map((a) => a.karakteristike.napad).sort((a, b) => b - a);
    // console.log(napadi);
    let pobednik = pok.filter((a) => a.karakteristike.napad === napadi[0]);
    //   console.log(pobednik)
    return pobednik;
  }
  