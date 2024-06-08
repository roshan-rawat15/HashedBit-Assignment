function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b !== 0) {
        return a / b;
      } else {
        return "Error: Division by zero";
      }
    default:
      return "Error: Invalid operation";
  }
}

// Example usage
console.log("Add: ", calculate("add", 10, 5)); 
console.log("Subtract: ", calculate("subtract", 10, 5)); 
console.log("Multiply: ", calculate("multiply", 10, 5)); 
console.log("Divide: ", calculate("divide", 10, 5)); 
console.log("Divide by zero: ", calculate("divide", 10, 0)); 
