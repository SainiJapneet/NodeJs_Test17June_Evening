/*
Write a JavaScript function that takes an array of objects representing products and returns the total price of all the products.
Input:


const products = [ { name: 'Apple', price: 0.5 }, { name: 'Orange', price: 0.8 }, { name: 'Banana', price: 0.3 } ];

*/
function priceTotal(arr){
const newArr = arr.map(value => value.price);
let sum = 0;
for(i in newArr){
    sum += newArr[i];
}
return sum;
}
const products = [ { name: 'Apple', price: 0.5 }, { name: 'Orange', price: 0.8 }, { name: 'Banana', price: 0.3 } ];
console.log(priceTotal(products));