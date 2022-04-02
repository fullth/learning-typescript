let person = {
    name: "fullth",
    greeting: function(greet: string) {
        console.log(greet + " " + this.name);
    }
}
person.greeting("Hello");

interface PersonType {
    name: string,
    greeting(this: PersonType, greet: string): string;
}
let typedPerson: PersonType = {
    name: "fullth",
    greeting: function(this: PersonType, greet: string): string {
        let message = `Hello, ${this.name}`;
        return message;
    }
}


type calcType = (a: number, b: number) => number;
let addCalc: calcType = (a, b) => a + b;
let minusCalc: calcType = (a, b) => a - b;