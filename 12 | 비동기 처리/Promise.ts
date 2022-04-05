const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve("오호 이렇게 완료처리 하는구만")
    } else {
        reject("오호 이렇게 실패처리 하는구만");
    }
});

promise.then(res => {
    console.log(typeof res, res); 
});

let chainingPromise = new Promise(function (resolve, reject) {
    resolve(1);
}).then(function(value) {
    console.log(value);
    return 2;
}).then(function(value){
    console.log(value);
    throw "Exception!";
}).catch(function(e) {
    console.log(e);
});