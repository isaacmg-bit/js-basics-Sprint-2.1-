let numeros = [1, 2, 3, 4, 5, 6];
const numerosFinsACinc = [];

for (const num of numeros) {
    if (num === 5) break;
    numerosFinsACinc.push(num);
}

console.log(numerosFinsACinc);
