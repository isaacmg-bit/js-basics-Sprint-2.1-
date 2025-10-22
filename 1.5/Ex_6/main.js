arrayNum =  [11, 12, 13, 14];

const arrayPars = arrayNum.every(num => num > 10);

console.log(arrayPars);

const arrayOnePar = arrayNum.some(num => num > 10);

console.log(arrayOnePar);