const findOdd = A => {
    const lens = A.reduce((a, i) => {
        a[i] = A.filter(x => x == i).length;
        return a;
    }, {});
    return parseInt(Object.keys(lens).find(k => lens[k] % 2));
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));