const sumPairs = (ints, s) => {
    return ints.reduce((a, i, x, r) => {
        const next = r[x + 1];
        console.log({ i, next, s })
        if (i + r[x + 1] == s) a = [i, r[x + 1]];
        return a;
    }, undefined);
}

console.log(sumPairs([4, -2, 3, 3, 4], 8));