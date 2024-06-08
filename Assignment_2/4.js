function sumOfProducts(n1, n2) {
  let str1 = n1.toString();
  let str2 = n2.toString();

  while (str1.length < str2.length) {
    str1 = "0" + str1;
  }
  while (str2.length < str1.length) {
    str2 = "0" + str2;
  }

  let sum = 0;

  for (let i = str1.length - 1; i >= 0; i--) {
    sum += parseInt(str1[i]) * parseInt(str2[i]);
  }

  return sum;
}

// Example usage
console.log(sumOfProducts(6, 34));
console.log(sumOfProducts(123, 456));
console.log(sumOfProducts(1234, 5678)); 
