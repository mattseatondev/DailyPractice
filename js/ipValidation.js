const isValid = str => {
    // return str.split('.').length == 4 && str.split('.').every(sub => (sub[0] != '0') && parseInt(sub) >= 0 && parseInt(sub) <= 255);
    // len 4
    // every => leading zeroes => len == 1 else false
    //          parseInt(num) between 0 and 255
    return str.split('.')
        .length == 4 
            && str.split('.').every(sub => (sub[0] != '0' || sub.length == 1)
                && parseInt(sub) >= 0 && parseInt(sub) <= 255);
}

console.log(isValid("137.255.156.100"));
console.log(isValid(""));
console.log(isValid('abc.def.ghi.jkl'));
console.log(isValid('12.34.56'));
console.log(isValid('123.456.789.0'));