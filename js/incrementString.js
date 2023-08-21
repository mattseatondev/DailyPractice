const incrementString = strng => {

    const splitNum = strng.split('').filter(s => parseInt(s) || s == '0');
    const str = strng.split('').filter(s => !parseInt(s) && s != '0').join('');
    if (splitNum.length) {
        const nonZeroIndex = splitNum.indexOf(splitNum.find(i => i != '0'));
        if (nonZeroIndex == -1) {
            const newNum = Array(splitNum.length).fill('0');
            newNum[newNum.length - 1] = '1';
            return `${str}${newNum.join('')}`
        }
        const num = parseInt(splitNum.splice(nonZeroIndex, splitNum.length).join(''));
        return `${str}${Array(nonZeroIndex != 0 ? nonZeroIndex - 1 : 0).fill('0').join('')}${num+1}`
    } else {
        return splitNum + '1';
    }

}

console.log(incrementString('foobar000'));
console.log(incrementString('foobar999'));
console.log(incrementString('foobar00999'));