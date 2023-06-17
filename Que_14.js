//Write a JavaScript function that takes a string as input and capitalizes the first letter of each word.
function wordCapitalize(str){
    const wordsArr = str.split(" ");
    for(i in wordsArr){
        wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].substr(1);
    }
    return wordsArr.join(" ");
}
console.log(wordCapitalize("hello world hi"));