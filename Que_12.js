//Write a JavaScript function that takes a sentence as input and returns an object containing the count of each word in the sentence.
function countWords(sentence) {
    const words = sentence.split(' ');
    const wordCount = {};
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  
    return wordCount;
}

console.log(countWords("This is a sentence is a test"));