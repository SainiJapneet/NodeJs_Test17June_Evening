//Write a JavaScript function that takes a string as input and checks if it is a palindrome. 
//Return true if it is a palindrome, and false otherwise. 
//(A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.)
function isPalindrome(orignalStr){
    let revStr = "";
    for(i = orignalStr.length - 1 ; i >= 0; i--){
        revStr += orignalStr[i];
    }
    if(orignalStr == revStr){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindrome("radar"));