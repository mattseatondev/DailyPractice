const longestSubstring = str => {

    return str.split('').reduce((a, i, x) => {
        let nextSub = str.substring(x + 1);
        let nextIndex = nextSub.indexOf(i) == -1 ? nextSub.length - 1 : nextSub.indexOf(i);
        if (nextIndex > a) a = nextIndex;
        return a;
    }, 0);

}

console.log(longestSubstring('abcabcbb'));