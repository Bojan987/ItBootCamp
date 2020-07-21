let x = function (a,b) {
let x = a+b; //local scope
let y = a-b;
let z = a*b;
let f = a/b;
let w = Math.pow(a,b);
let e = a%b;
console.log(x,y,z,f,w,e);
}


x(10,5);