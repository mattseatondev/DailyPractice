const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(i => i == 'x').length == str.filter(i => i == 'o').length
}