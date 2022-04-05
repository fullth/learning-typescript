function delay(msg: string) {
    let ms: number = Math.floor(Math.random() * 1000) + 1;
    setTimeout(() => {
        console.log(msg, ms + "ms");
    }, ms);
}

function async() {
    delay("a");
    delay("b");
    delay("c");
}

async();

function delay2(msg: string) {
    let ms: number = Math.floor(Math.random() * 1000) + 1;
    return new Promise(function (resolve) {
        setTimeout(resolve, ms, msg);
    }).then(function(v) {
        console.log(v, ms + "ms");
    });
}

async function helloAsync() {
    await delay2("A");
    await delay2("B");
    await delay2("C");
}

helloAsync();