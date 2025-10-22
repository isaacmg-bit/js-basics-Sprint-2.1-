function calculator (num1, num2, callback) {
  return callback (num1, num2);
}

const result = calculator (2, 3, (num1, num2) => num1+num2)

console.log(result)