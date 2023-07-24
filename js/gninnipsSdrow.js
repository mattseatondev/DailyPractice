const spinWords = string => {
    return string.split(' ').map(w => w.length >= 5 ? w.split('').reverse().join('') : w).join(' ');
}