function correctSentence(sentence, wrong, correct) {

  let correctedSentence = sentence.replace(new RegExp(wrong, "gi"), correct);
  return correctedSentence;
}

let sentence = "Ths is a sentance with misspelled wrd.";
let wrongWord = "Ths";
let correctWord = "This";

let correctedSentence = correctSentence(sentence, wrongWord, correctWord);
console.log(correctedSentence); 
