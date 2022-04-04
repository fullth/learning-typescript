class Cat {
    name = "cat";
    age = 14;
}

class Dog {
    name = "dog";
    leg = 4;
}

function diffCheck(x: Cat | Dog) {
    if(x instanceof Cat) {
        console.log(x.name);
    }
    console.log(x.name);
    //console.log(x.age);
    //console.log(x.leg);
}

diffCheck(new Cat);