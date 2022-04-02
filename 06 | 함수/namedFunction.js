test(1);
function test(a) {
    console.log(a);
}
test(2);
//resultSum(1,2) //Error
let resultSum = function (num1, num2) {
    return num1 + num2;
};
console.log(resultSum(1, 2));
function pow(x, n = 2) {
    return Math.pow(x, n);
}
console.log(pow(10));
console.log(pow(10, 3));
