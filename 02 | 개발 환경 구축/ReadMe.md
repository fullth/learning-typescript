02 | 타입스크립트 개발 환경 구축
====================

#### 타입스크립트 설치
```npm i -g typescript```

#### 설치된 버전 확인
```tsc -v```

#### 최신 버전 확인
```npm outdated -g typescript```

#### 최신 버전 업데이트
```
npm uninstall -g typescript
npm cache clean
npm install -g typescript
```

#### 타입스크립트 컴파일러
```tsc hello.ts```
컴파일 옵션을 생략하면 ES3 버전을 기준으로 자바스크립트를 생성한다.
##### 컴파일옵션
1. -p : 지정한 경로를 프로젝트 루트 디렉터리로 설정한다.  
현재 디렉터리를 루트 디렉터리로 삼아 컴파일하려면 -p 혹은 --project 옵션에 경로명을 추가하여 컴파일한다.
```
tsc -p ./
tsc -p ../
```
2. -t : ECMAScript 버전별로 컴파일한다.
```tsc hello.ts -t ES5```

##### 여러 파일을 동시에 컴파일 할 수 있다.
```
tsc hello.ts hello2.ts hello3.ts

디렉터리에 존재하는 파일 목록이 담긴 파일 생성하여 tsc로 컴파일하기.
dir *.ts /b /s > ts-hello.txt
tsc @ts-hello.txt
```
##### 변경 감지 기능
```
tsc hello.ts -watch
파일 내용이 변경되면 컴파일을 수행하겠다는 로그를 출력하고 컴파일을 수행함.
```
##### tsconfig.json
컴파일 설정 정보를 관리.
##### ts-node module
노드를 이용해 타입스크립트 파일을 실행할 수 있는 환경을 제공해줌.
```
npm i -g ts-node@3.3.0
ts-node hello.ts
```