//Write a JavaScript function that takes a sentence as input and checks if it is a pangram (contains every letter of the alphabet).
function isPangram(sentenceString){
    const lowerCase = sentenceString.toLowerCase();
    for(let i = 97; i < 123; i++){
        const letter = String.fromCharCode(i);
        if(lowerCase.indexOf(letter) === -1){
            return false
            break;
        }
    }
    return true;
}
console.log(isPangram("abcdefghijklmnopqrstuvwxz"));