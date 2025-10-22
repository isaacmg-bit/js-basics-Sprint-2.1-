function suma (...numbers) {
    let sum = 0;
    for (const element of numbers) {
        sum += element;
    }
    return sum;
}

console.log(suma (3, 2, 6));