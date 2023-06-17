//Write a JavaScript function that takes a string as input and removes all duplicate characters, returning the modified string.
function filteredString(str){
    const uniqueStr = [];
    for(i in str){
        const char = str[i];
        if(!uniqueStr.includes(char)){
            uniqueStr.push(char);
        }
    }
    return uniqueStr.join("");
}
console.log(filteredString("Hello world"))