function reverseString(str) {
  const charArray = str.split("");

  const reversedArray = charArray.reverse();

  const reversedStr = reversedArray.join("");

  return reversedStr;
}

// Example usage
const input = "Hello";
console.log(reverseString(input)); 
