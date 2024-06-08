function repeatedSumOfDigits(number) {
  const sumOfDigits = (num) => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  while (number >= 10) {
    number = sumOfDigits(number);
  }

  return number;
}

console.log(repeatedSumOfDigits(456)); 
