let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";


function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}

let vowelCount = 0;
let consonantCount = 0;

for (let char of str.toLowerCase()) {
  if (/[a-z]/.test(char)) {
   
    if (isVowel(char)) {
      vowelCount++;
    } else {
     
      consonantCount++;
    }
  }
}

console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);
