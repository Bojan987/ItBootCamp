// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице



function cenaPoCm2(r,cena){
let povrsina = 2*r*Math.PI
return cena/povrsina
}

console.log(`Cena pice po kvadratnom centimetru je : ${cenaPoCm2(50,315)} dinara`)