console.log('lets practice!');

// Javascript VERY EASY

// Array Practice

// 1. Create a function that takes an array containing only numbers and returns the first element.

/** function that returns 
 * @param {array}  arr array to be tested
 * @return {number} returns first number in the array
 */

function retFirst(arr){
    return arr[0];
}

let myArray = [8, 2, 4, 6, 3, 7];

console.log(retFirst(myArray));

// 2. Write a function that takes the base and height of a triangle and return its area.
// Area of a triangle = (b * h) / 2

function areaTriangle(base, height){
    return (base * height)/2;
}
console.log(areaTriangle(3,4));

// 3. Create a function that takes the age in years and returns the age in days.
// Use 365 days as the length of a year for this challenge.

function returnAgeDays(years){
    return years * 365;
}
console.log(returnAgeDays(4));

// 4. Given two arguments, return an array which contains these two arguments.

function arrArguments2(arg0, arg1){
    let newArray = [];
    newArray.push(arg0, arg1);
    return newArray;
}
console.log(arrArguments2(3, 4));
