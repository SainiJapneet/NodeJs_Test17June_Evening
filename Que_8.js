//Write a JavaScript function that takes a number as input and returns the factorial of that number.
function fact(num){
    if(num == 0){
        return 1;
    }
    else{
        return num*fact(num-1);
    }
}
console.log(fact(5));