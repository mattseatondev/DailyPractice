const duplicateCount = text => {
    return text.toLowerCase().split('').reduce((a, i, x, r) => {
        if (r.filter(n => n == i).length > 1 && !a.includes(i)) a.push(i);
        return a;
    }, []).length;
}

console.log(duplicateCount('Indivisibilities'))