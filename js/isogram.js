const isIsogram = str => {
    str = str.toLowerCase();
    return str.split('').every((i, x) => str.indexOf(i) == x);
}