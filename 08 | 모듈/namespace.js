var FirstNameSpace;
(function (FirstNameSpace) {
    function print() {
        console.log('Hello');
    }
})(FirstNameSpace || (FirstNameSpace = {}));
var FirstModule;
(function (FirstModule) {
    function print() {
        console.log('Hello');
    }
})(FirstModule || (FirstModule = {}));
var Example1;
(function (Example1) {
    Example1.name1 = "서로의 이름 공간에 접근합니다. (1)";
    function getName() {
        return Example2.name2;
    }
    Example1.getName = getName;
})(Example1 || (Example1 = {}));
var Example2;
(function (Example2) {
    Example2.name2 = "서로의 이름 공간에 접근합니다. (2)";
    function getName() {
        return Example1.name1;
    }
    Example2.getName = getName;
})(Example2 || (Example2 = {}));
console.log(Example1.getName());
console.log(Example2.getName());
