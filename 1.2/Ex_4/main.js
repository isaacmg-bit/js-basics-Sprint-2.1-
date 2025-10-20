const arrayNum = [3, 4, 1, 13, -2, 5];

function parOImpar(arrayNum) {
  const result = [];
  for (let i = 0; i < arrayNum.length; i++) {
    result.push(arrayNum[i] % 2 === 0 ? "Parell" : "Imparell");
  }
  return result;
}

console.log(parOImpar(arrayNum));