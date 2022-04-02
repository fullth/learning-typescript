let person = {
    name: "fullth",
    greeting: function (greet) {
        console.log(greet + " " + this.name);
    }
};
person.greeting("Hello");
let typedPerson = {
    name: "fullth",
    greeting: function (greet) {
        let message = `Hello, ${this.name}`;
        return message;
    }
};
