interface iFormat {
    (data: string, toUpper?: boolean): string;
}

let format: iFormat = function(str: string, isUpper?: boolean){
    if(isUpper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
};