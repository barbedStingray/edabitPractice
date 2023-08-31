console.log('lets practice!');

// Javascript VERY EASY

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

// 5. Create a function that accepts an array and returns the last item in the array.

function returnLastItem(arr){
    return arr[arr.length -1];
}// end function

// 6. Fix the code in the code tab to pass this challenge (only syntax errors). 

function cubes(a) {
	return a ** 3;
}

// 7. Write a function that converts hours into seconds

function hoursToSeconds(time){
    return (time * 60) * 60;
}

// ***
// 8. Create a function that takes an array of numbers arr and returns an inverted array.





// 9. Create a function that takes two numbers as arguments and returns their sum.

function sumNum(num0, num1){
    return num0 + num1;
}

// 10. Write a function that takes an integer minutes and converts it to seconds.

function minsToSeconds(min){
    let seco = 60;
    return min * seco;
}

// 11. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
// (side1 + side2) - 1 = maximum range of third edge.

function maxTriSide(s1, s2){
    return (s1 + s2) -1;
}

// 12. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function findRemainder(a, b){
    return a % b;
}

// 13. Create a function that takes length and width and finds the perimeter of a rectangle

function perimiterOfRectangle(l, w){
    return (l + w) * 2;
}

// 14. A student learning JavaScript was trying to make a function. 
// His code should concatenate a passed string name with string "Edabit" 
// and store it in a variable called result. He needs your help to fix this code.
// fixed
function nameString(name){
    var b = "Edabit";
	var result = name + b;
  	return result;
}

// 15. Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrZero(a){
    if( a <= 0){
        return true;
    }
    return false;
}

// 16. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function returnTwoTrue(a, b){
    if( a + b < 100 ){
        return true;
    }
    return false;
}

// 17. You have to implement a function that returns the total number of legs of all the animals.

function legsOfFarmAnimals(cows, pigs, chickens){
    let cowLegs = cows * 4;
    let pigLegs = pigs * 4;
    let chickenLegs = chickens * 2;
    let totalLegs = cowLegs + pigLegs + chickenLegs;
    return totalLegs;
}

// 18. Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// function countdown(start) {
//     let arr = [];
//     while( start >= 0){
//         arr.push(start);
//         start--;
//     }
// }
// console.log(countdown(5));

// 19. Given a letter and an array of words, return whether the letter does not appear in any of the words.
//forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
//forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true

// let forbiddenArray1 = [`goose`, `duck`, `pheasant`, `robin`];
// let forbiddenArray2 = [`whale`, `dolphin`, `shark`, `stingray`];

// function forbiddenLetter(letter, arr){
    
// }

// 20. Create a function that takes a base number and an exponent number and returns the calculation.

function toThePowerOf(a, b){
    return a ** b;
}

// 21. Write a function that returns the string "something" joined with a space " " and the given argument a.

function sentenceFormation(string, a){
    return `${string} ${a}`;
}
console.log(sentenceFormation(`hello`, `ben`));

// 22. You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored
// find the final points for the team and return that value.

function chicagoBulls(a, b){
    
    return (a * 2) + (b * 3);
}
console.log(chicagoBulls(3, 5));

// 23. Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

function nPolygon(sides){
    if( sides <= 2 ){
    console.log(`this is not a polygon!`);
} else {
    return ( sides - 2) * 180
    }
}
console.log(nPolygon(3));

// 24. Create a function that takes a boolean variable flag and returns it as a string.

function booleanToString(boo){
    return boo.toString();
}
console.log(booleanToString(true));

// 25. Make a function using the && operator.

function andAndTrue(a, b){
    if( a === true && b === true){
        return true;
    }// end trure
    else {
        return false;
    }// end false
} // end funct

// 26. Create a function that takes two strings as arguments and return either true or false 
// depending on whether the total number of characters in the first string is equal to the total
// number of characters in the second string.

function stringLengthMatch(str0, str1){
    if( str0.length === str1.length){
        return true;
    }// end true
    else {
        return false;
    }// end false
}

// 27. fix the buggy code!
// function printArray(number) {
//     var newArray = [];
  
//     for(var i = 1; i <= number;) {
//       newArray.push(i);
//     }
  
//     return newArray;
//   }

function printArray(number){
    var newArray = [];
    for(var i = 1; i<= number; i++) {
        newArray.push(i);
    }
    return newArray;
}

// 28. Create a function that takes two strings as arguments and returns the number of times 
// the first string (the single character) is found in the second string.

function letterIdentification(letter, string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === letter){
            count++;
        }//letter is matched
    }
    return count;
}
console.log(letterIdentification(`a`, `zebras`));

// 29. Given a higher bound num, implement a function that returns an array with the sequence of numbers, 
// after that every multiple of 4 has been amplified.

function highBoundFour(num){
    let x = 0;
    let newArr = [];
    while( x <= num ){
        if( x % 4 === 0 ){
            newArr.push(x * 10);
            x++;
        }//return multiple of 4
        else {
            newArr.push(x);
            x++;
        } // push other numbers
    }// complete while loop
    return newArr;
} // end highBoundFour

console.log(highBoundFour(5));

// 30. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// ****

let minMaxArray = [5, 9, 2, 6, 2, 4, 7];

function minMaxFunction(arr){
    let newArray = [];
    newArray.push(Math.min(arr));
    // newArray.push(Math.max(arr));
    return newArray;
}
console.log(minMaxFunction(minMaxArray));







