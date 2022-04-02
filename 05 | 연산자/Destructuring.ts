// console.log(1 + true) // error

let {id, country} = {id: "Happy", country: 82};
console.log(id); //Happy
console.log(country); //82

let {id2, country2 = 33} = {id2: "Happy"};

let {id3: newId, country3: newCountry} = {id3: "Happy", country3: "333"};
console.log(newId);
console.log(newCountry);



// without destructuring
function printProfile(obj: any) {
    let name = "";
    let nationality = "";

    name = (obj.name == undefined) ? "anonymous" : obj.name;
    nationality = (obj.nationality == undefined) ? "?" : obj.nationality;
}
printProfile({name: "fullth"});

// destructuring
function printProfile2({ name, nationality = "?" }) {
    console.log(name);
    console.log(nationality);
}
printProfile2({name: "fullth"})

function printProfile3({ name, nationality = "none" } = {name: "anonymous"} ){
    console.log(name, nationality); // anonymous none
}
printProfile3();



type Car = {brand: string, fuel?: number};
function showCase({brand, fuel}: Car): void {
    console.log(brand, fuel);
}
showCase({brand: "Lincoln", fuel: 33});
showCase({brand: "BMW"}); //BWM undefined



let numbers = ["one", "two", "three", "four", "five"];
let [one, two] = numbers;
console.log(one);
console.log(two);

let [,,three, four,] = numbers;
console.log(three);
console.log(four);

[one, two] = [two, one];
console.log(one);
console.log(two);

let [color, color2 = "Green"] = ["White"];
console.log(color, color2);



function test([a, b]: [string, number]) {
    console.log(a, b);
}
test(["test", 22]);