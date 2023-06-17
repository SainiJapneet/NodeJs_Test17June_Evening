//Write a JavaScript function that takes an array of numbers as input and returns the sum of
//the squares of those numbers.
function sumOfSquares(arr){
    const newArr = arr.map(value => value**2);
    let sum = 0;
    for(i in newArr){
        sum += newArr[i];
    }
    return sum;
}
console.log(sumOfSquares([1, 2, 3, 4]));