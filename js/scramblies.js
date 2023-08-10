const scramble = (str1, str2) => {

    const spl1 = str1.split('');
    const spl2 = str2.split('');
    return spl2.every(n => spl1.filter(i => i == n).length >= spl2.filter(i => i == n).length);

}

console.log(scramble('rkqodlw', 'world'));