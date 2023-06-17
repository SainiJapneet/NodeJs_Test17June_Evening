//Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
function arrAverage(arr){
    let sum = 0;
    for(i in arr){
        sum += arr[i];
    }
    const avg = sum/arr.length;
    return "Average of numbers is " + avg;
}
console.log(arrAverage([2,4,6,8,10]));