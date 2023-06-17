//Write a JavaScript function that takes an array of numbers as input and returns the largest number in the array.
function maxNumber(arr){
    let max = arr[0];
    for(i in arr){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return "Largest of the given numbers is " + max;
}
console.log(maxNumber([-1,4,-20,10,25]));