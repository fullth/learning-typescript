// for
for(let i: number = 1; i <= 10; i++) {
    console.log(i);
}

// for in
let alphabet: Array<string> = ["A", "B", "C"];
for(let index in alphabet) {
    console.log(index, alphabet[index]);
}

// for in
let fruits: any = { "a": "apple", "b": "banana", "c": "cherry" };
for (let property in fruits) {
    console.log(property, fruits[property]);
}

// for of
for(let value of "TEST") {
    console.log(value);
}