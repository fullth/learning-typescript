namespace FirstNameSpace {
    function print() {
        console.log('Hello');
    }
}

module FirstModule {
    function print() {
        console.log('Hello');
    }
}



namespace Example1 {
    export let name1 = "서로의 이름 공간에 접근합니다. (1)";
    export function getName() {
        return Example2.name2;
    }
}

namespace Example2 {
    export let name2 = "서로의 이름 공간에 접근합니다. (2)";
    export function getName() {
        return Example1.name1;
    }
}

console.log(Example1.getName());
console.log(Example2.getName());


//다른 파일에 작성했다고 가정. Car.ts
namespace Car {
    export let auto: boolean = false;

    export interface ICar {
        name: string;
        vendor: string;
    }
}

//다른 파일에 작성했다고 가정. Car2.ts
/// <reference path="Car.ts"/>
namespace Car {
    export let wheels: number;
    console.log(auto);

    class Taxi implements ICar{
        name: string;
        vendor: string;
    }
}
console.log(Car.wheels) //Car2.ts만 개별 컴파일 시 접근 불가