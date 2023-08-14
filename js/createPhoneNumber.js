const createPhoneNumber = numbers => {
    return '(012) 345-6789'.split('').map(n => !isNaN(n) ? numbers[parseInt(n)] : n).join('').replace(')', ') ');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));