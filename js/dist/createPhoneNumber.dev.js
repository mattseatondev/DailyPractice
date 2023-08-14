"use strict";

var createPhoneNumber = function createPhoneNumber(numbers) {
  var nKey = '012-345-6789';
  nKey = nKey.split('').map(function (nk) {
    console.log({
      nk: nk
    });

    if (isNaN(nk)) {
      return numbers[nk];
    } else {
      return nk;
    }
  });
  return nKey; // return `012-345-6789`.split('').map(n => isNaN(n) ? numbers[parseInt(n)] : '-').join('');
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));