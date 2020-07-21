let y = function(a){  
    let i = 6;                                    
    a+="b"                                       
    console.log(" ".repeat(i - a.length) + a);
    if(a.length < i)
      y(a);  
  }

  y("");

// **************************
//          sa for
//***************************/
// var a=""
// var i = 6
// for (; a.length < i; a+="#"){
//     console.log(" ".repeat(i-a.length ) + a);
    
// }