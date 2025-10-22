const arrayNum = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const arrayOps = arrayNum.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);

console.log(arrayOps);