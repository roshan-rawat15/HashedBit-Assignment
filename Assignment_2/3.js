function findTax(salary) {
  let tax;

  switch (true) {
    case salary > 0 && salary <= 500000:
      tax = 0;
      break;
    case salary > 500000 && salary <= 1000000:
      tax = salary * 0.1;
      break;
    case salary > 1000000 && salary <= 1500000:
      tax = salary * 0.2;
      break;
    case salary > 1500000:
      tax = salary * 0.3;
      break;
    default:
      tax = "Invalid salary";
  }

  return tax;
}

// Example usage
console.log(findTax(450000)); 
console.log(findTax(750000));
console.log(findTax(1200000)); 
console.log(findTax(2000000));
console.log(findTax(-10000)); 
