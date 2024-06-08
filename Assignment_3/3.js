let string = "INDIA";

let stringArray = string.split("");

stringArray.splice(3, 0, "ONESIA");

let output = stringArray.join("");

console.log(output); 
