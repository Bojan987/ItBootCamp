let budget = 1200;
let price = 1400;
if(budget>0){
 budget >= price ? console.log(`Uspesno ste kupili proizvod. Vase trenutno stanje je ${budget-price} dinara`)

: console.log (`Nemate dovoljno novca, fali vam  ${Math.abs(budget-price)} dinara, trenutno imate ${budget} dinara`) }

else console.log(`u kreditu ste ${Math.abs(budget)} dinara, nemojte se vise zaduzivati :) `);