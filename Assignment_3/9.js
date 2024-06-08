function countWords(paragraph) {

  const words = paragraph.split(/\s+/);

  return words.length;
}

// Example usage
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
console.log(countWords(paragraph)); 
