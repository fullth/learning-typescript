test(1);
function test(a: number) {
    console.log(a);
}
test(2);



//resultSum(1,2) //Error
let resultSum = function(num1: number, num2: number) {
    return num1 + num2;
}
console.log(resultSum(1, 2));



function pow(x: number, n: number = 2): number {
    return x ** n;
}
console.log(pow(10));
console.log(pow(10, 3));



function concat(...restParam) {
    return restParam.join("");
}
console.log(concat("a", 1, "B", 22)); //a1B22

function concat2(a: number, ...restParam: string[]) {
    return a+restParam.join("");
}
console.log(concat2(1, "a", "B")); //1aB




function sum(a: number, b?: number): number {
    if(b === undefined)
        b = 0;
    return a + b;
}
console.log(sum(1, 4));



function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
};

function add2(a: string, b: string): string;
function add2(a: number, b: number): number;
function add2(a: any, b?: any): any {
    if(b === undefined) {
        return a;
    } else {
        return a + b;
    }
};
