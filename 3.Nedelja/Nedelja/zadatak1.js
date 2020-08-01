// Написати функцију која исписује све елементе низа који су дељиви са 5
let niz = [1,2,3,4,5,6,7,8,9,10]
function deljiviSa5 (a){
   a.forEach(element => {
       if(element % 5 ===0)
       console.log(element)
   });
}

deljiviSa5(niz)