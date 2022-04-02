let arr = [3, 4, 5];
let arr2 = [1, 2, ...arr];
let arr3 = [1, ...arr, 2];

let {a, b, ...c} = {a: 10, b: 20, c: 30, d: 22};
console.log(a); //10
console.log(b); //20
console.log(c); //{ c: 30, d: 22 }
