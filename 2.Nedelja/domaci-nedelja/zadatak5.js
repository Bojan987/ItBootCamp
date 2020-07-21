let d = function(a){
    let i = 6;                         //broj redova
    a+="c"                             //dodajem string tj parametar je string c 
    console.log(" ".repeat(i - a.length) + a + " " + a); // ispred stringa stavljam space * (6- duzina parametra) +  ceo string + razmak +ceo string
    if(a.length < i)                                     //rekurzija sve  dok god je duzina parametra < i tj 6
       d(a);  
  }

  d("");

//duzina parametra-stringa je u pocetku c tj 1, pa cc-2 ccc-3 cccc-4 ccccc-5
//space se ponavlja pre stringa
//    6-1 = 5 puta + c + space + c 
//    6-2 = 4 puta + cc + space + cc 
//     .....
//    6-6 = 0 ........ovde loguje jer prvo radi consol.log a posle proverava uslov 


