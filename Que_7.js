//Write a JavaScript function that takes an array of strings as input and returns the concatenated string of all the elements.
function strArr(arr){
    let str = "";
    for(i in arr){
        str += arr[i];
    }
    return str;
}
console.log(strArr(["This"," ","is"," ","a"," ","NodeJs"," ","class"]));