/*Write a JavaScript function that takes an array of objects representing students and returns an array of their names.
Input:


const students = [ { name: 'John', age: 20 }, { name: 'Jane', age: 22 }, { name: 'Sam', age: 19 } ];
*/

function nameArray(arr){
    nameArr = arr.map(value => value.name);
    return nameArr;
}
console.log(nameArray([{ name: 'John', age: 20 }, { name: 'Jane', age: 22 }, { name: 'Sam', age: 19 }]));