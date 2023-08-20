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

    RULES:
    // if 3 or more of same numeral, add 3 * numeral
    // else, if proceeded by larger numeral, add larger - numeral(*number of numeral, which is <= 2)

    let number = 0;
    


    // const findNum = letter => numerals.find(numSet => numSet[0] == letter)[1];
    // let num = 0;
    // roman = roman.split('');
    // roman.forEach((r, rIndex) => {
    //     if (rIndex == roman.length - 1) {
    //         num += findNum(r);
    //     } else if (r == roman[rIndex + 1]) {
            
    //     }
    //     // if (r == roman[rIndex + 1])
    // });
    // return num;
}

console.log(romanize('XXII'));
console.log(romanize('DDM'))