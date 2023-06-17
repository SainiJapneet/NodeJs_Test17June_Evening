//Write a JavaScript function that takes an array of numbers as input and returns a new array with only the even numbers.
function evenArr(arr){
    let newArr = arr.filter(value => value%2 == 0);
    return newArr;
}
console.log(evenArr([1,2,3,4,5,6]));
