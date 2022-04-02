let addTest = (x: number, y: number) => {return x + y};
console.log(addTest(1,2));



let numberList = [1, 2, 3, 4, 5];
numberList = numberList.filter(n => {
    return n % 2 === 0;
});
console.log(numberList); //[ 2, 4 ]

function getSum(nums: number[]): number{
    let sum: number = nums.reduce((a, b) => {return a + b});
    return sum;
}
let numSum = getSum([1, 2, 3, 4, 5]);
console.log(numSum);
