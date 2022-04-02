let items: number[] = [1, 2, 3];
items.forEach(item => console.log(item));

// 튜플
let x : [string, number];
x = ["tuple", 111];

// 유니언
let y: string | number;

// 인터섹션
interface Factory { location: string; }
interface Robot { serialNum: string; }
let hubo: Factory & Robot = {location: "Korea", serialNum: "KHR-3"};

let num: number = 11;
let str: string = "test";
let isTest: boolean = true;

console.log(num);
console.log(str);
console.log(isTest);

let hi = Symbol();
console.log(hi);

// 첫 요소에 0이 할당되고 그 다음 값은 초기화 하지 않는 이상 1씩 증가
enum WeekDay {Mon, Tue, Wed, Thu};
let day: WeekDay = WeekDay.Mon;
console.log(day);

type EventType = "keyup" | "mouseover";
let keyup: EventType = "keyup";
console.log(keyup);

// any: 모든 타입의 최상위 타입
let basket: any = true;
let anyList: any[] = [true, "test", 1];