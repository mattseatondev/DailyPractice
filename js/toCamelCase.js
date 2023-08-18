const toCamelCase = str => {
    return str.replace(/_/g, '-').split('-').map((i, x) => x != 0 ? i[0].toUpperCase() + i.substring(1, i.length) : i).join('');
}

console.log(toCamelCase('the_stealth_warrior'));