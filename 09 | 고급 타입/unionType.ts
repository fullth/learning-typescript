function check(t: number | string | boolean): number | string | boolean {
    if(typeof t === "number") {
        return t;
    } else if(typeof t === "string") {
        return t;
    } else {
        return t;
    }
}

console.log(typeof check(1), check(1));
console.log(typeof check("fullth"), check("fullth"));
console.log(typeof check(true), check(true));
