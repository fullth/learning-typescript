export function unique(arr) {
    console.log('a module');
    return arr.filter((v, i, a) => a.indexOf(v) === i);
}