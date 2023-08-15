const rot13 = message => {

    return message.split('').map(let => {
        const capital = let === let.toUpperCase();
        const charCode = let.toLowerCase().charCodeAt(0);
        let rot = charCode + 13;
        if (rot > 122) {
            rot = 97 + (122 - charCode);
        }
        const result = String.fromCharCode(rot);
        return !capital ? result : result.toUpperCase();
    }).join('');

}

console.log(rot13('test'));