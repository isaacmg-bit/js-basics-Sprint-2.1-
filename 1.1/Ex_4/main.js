function printNumbers (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const print = (num) => console.log(num)
        print(numbers[i]);
    }
}

printNumbers([1, 2, 3, 4, 5]);