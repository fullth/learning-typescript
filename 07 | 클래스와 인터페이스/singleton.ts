class Member {
    static age = 0;
    static getAge() {
        return this.age;
    }
    
    private constructor() {} //인스턴스 생성 불가
}

console.log(Member.age);
Member.age = 26;
console.log(Member.getAge());
