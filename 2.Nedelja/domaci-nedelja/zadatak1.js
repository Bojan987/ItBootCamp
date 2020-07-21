
//cena pice je c , precnik je r,poluprecnik je r/2
function calc(c,r){
let p = (r/2)*(r/2)*Math.PI

let cm2 = c/p
console.log(`Povrsina pice je : ${p} kvadratnih centimetara, a ukupna cena je ${c} dinara`)
console.log(`Cena pice po cm2 je ${cm2} dinara`  )
}

calc(500,10);