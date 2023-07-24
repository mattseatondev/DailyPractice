
function getGeneration(cells, generations){
  cells.forEach((row, rX) => {row.forEach((col, cX) => {
    const neighRow = [rX - 1, rX, rX + 1];
    const neighCol = [cX - 1, cX, cX + 1];
    neighRow.forEach(nR => {
      if (neighRow[neighCol[nR]])
    })
  })})
}

console.log(getGeneration([[1,0,0],[0,1,1],[1,1,0]]));
