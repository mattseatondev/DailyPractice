const stockList = (listOfArt, listOfCat) => {
    return ([listOfArt, listOfCat].some(list => !list.length)) ? '' : listOfCat.reduce((count, cat, catIndex) => {
        count[cat] = listOfArt.filter(art => art[0] == cat).reduce((artTotal, art) => artTotal += parseInt(art.split(' ')[1]), 0);
        if (catIndex == listOfCat.length - 1) count = Object.keys(count).map(c => `(${c} : ${count[c]})`).join(' - ');
        return count;
    }, {});    
}

const arts = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const cats = ['A', 'B', 'C', 'D'];

console.log(stockList(arts, cats));