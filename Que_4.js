//Write a JavaScript function that takes a string as input and returns the reverse of that string.
function strReverse(str){
    let revStr = ""; 
for(i = str.length - 1 ; i >= 0; i--){
    revStr += str[i];
}
    return "Reverse string of " + str + " is : " + revStr;
}
console.log(strReverse("Hello"));
