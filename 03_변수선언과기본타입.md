03 | 변수 선언과 기본 타입
====================

### var 선언자의 특징
호이스팅
block level scope가 지원되지 않음.
블록 레벨 스코프를 지원하는 대표적인 선언자
1. let, const
2. 클래스, 인터페이스, 타입 알리어스, enum

### let 선언자의 특징
호이스팅 방지
블록 레벨 스코프 지원
1. 같은 블록 내 같은 이름 변수를 중복 선언할 수 없음.
2. 변수를 초기화 하기 전에 변수에 접근할 수 없음 -> 호이스팅 방지
3. 선언할 변수에 블록 레벨 스코프 적용

### 점진적 타입 검사
컴파일 시간에 타입 검사를 수행하면서 필요에 따라 타입 선업의 생량을 허용.
타입 선언을 생략하면 암시적 형변환이 일어남.

### 자바스크립트의 동적 타이핑
동적 타이핑: 값을 변수에 할당할 때 타입이 정해지는 것

### 기본 타입
```
let num: number = 11;
let str: string = "test";
let isTest: boolean = true;
let hi = Symbol();

enum WeekDay {Mon, Tue, Wed, Thu};
let day: WeekDay = WeekDay.Mon;

type EventType = "keyup" | "mouseover";
let keyup: EventType = "keyup";
```
### 객체 타입
```
let items: number[] = [1, 2, 3];
items.forEach(item => console.log(item));

// 튜플
let x : [string, number];
x = ["tuple", 111];
```
### 기타 타입
```
// 유니언
let y: string | number;

// 인터섹션
interface Factory { location: string; }
interface Robot { serialNum: string; }
let hubo: Factory & Robot = {location: "Korea", serialNum: "KHR-3"};
```
### 내장타입
```
// any: 모든 타입의 최상위 타입
let basket: any = true;
let anyList: any[] = [true, "test", 1];
```