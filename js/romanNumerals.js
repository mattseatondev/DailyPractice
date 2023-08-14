const romanize = roman => {
    const numerals = [
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ];
    const findNum = letter => numerals.find(numSet => numSet[0] == letter)[1];
    let num = 0;
    roman = roman.split('');
    roman.forEach((r, rIndex) => {
        if (rIndex == roman.length - 1) {
            num += findNum(r);
        } else if (r == roman[rIndex + 1]) {
            
        }
        // if (r == roman[rIndex + 1])
    });
    return num;
}

console.log(romanize('XXII'));