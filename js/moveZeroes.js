const moveZeroes = arr => {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}

console.log(moveZeroes([false,1,0,1,2,0,1,3,"a"]));