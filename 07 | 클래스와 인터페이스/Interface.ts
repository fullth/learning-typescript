interface Interface {
    test(): void;
}

class InterfaceTest implements Interface{
    test() {
        console.log('인터페이스 컴파일 된 후 테스트')
    }
}