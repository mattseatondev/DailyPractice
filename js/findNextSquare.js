const findNextSquare = sq => {
    if (typeof sq == 'number') {
        if (!Number.isInteger(Math.sqrt(sq))) {
            return -1;
        } else {
            sq = {val: sq};
        }
    }
    sq.val ++;
    return Number.isInteger(Math.sqrt(sq.val)) ? sq.val : findNextSquare(sq);
}

console.log(findNextSquare(625));