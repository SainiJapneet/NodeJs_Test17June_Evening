//Write a JavaScript function that takes a number as input and returns the Fibonacci sequence up to that number.
function fibbo(num){
    let series = [0,1];
    for(let i = 2; i < num; i++){
        if(series[i-1] + series[i-2] > num){
            break;
        }
        series[i] = series[i -1] + series[i -2];
    }
    return series
}
console.log(fibbo(10));