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

// let minMaxArray = [5, 9, 2, 6, 2, 4, 7];

// function minMaxFunction(arr){
//     let newArray = [];
//     newArray.push(Math.min(arr));
//     // newArray.push(Math.max(arr));
//     return newArray;
// }
// console.log(minMaxFunction(minMaxArray));

// 31. Create a function that takes an array of values resistance that are connected in series, 
// and calculates the total resistance of the circuit in ohms. 

let ohmArr = [5, 2, 8, 3, 6, 1];
let totOhm = 0;

function ohmResistance(arr){
    for(let i = 0; i < arr.length; i++){
        totOhm += arr[i];
    }// end for loop
    return totOhm;
}// end function
console.log(ohmResistance(ohmArr));

// 32. Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// LESSON LEARNED
// .splice alters your array within the loop and will have an
// affect on the poisitions.

let radArray = [3, 4, `absd`,  `gslk`, 1, `ljsd`, 3, `lje`];
let simArray = [2, `a`, 6, `c`, `u`, 5, `r`, 9];

function filterStrings(arr){
    const numArray = [];
    for(let num of arr){
        if( typeof(num) === `number`){
            numArray.push(num);
        }// end if statement
    }// end loop
    return numArray;
}// end function
console.log(filterStrings(radArray));
console.log(filterStrings(simArray));

// 33. Create a function to count the number of 1s in a 2D array.
// naild it

//the arrays in the arrays
let array2D = [[1, 1, 1], [0, 0, 1], [0, 0, 0]];

function countfor1In2D(arr){
    let ones = 0;
    for(let num0 of arr){
        for(let num1 of num0){
            if(num1 === 1){
                ones++;
            }// end if statement
        }//end secondary for loop
    }// end primary for loop
    return ones;
}// end function
console.log(countfor1In2D(array2D));


// 34. Create a function that takes in an array of miles run every Saturday 
// and returns Johnny's total number of progress days.

let saturdayRuns = [2, 3, 4, 1, 4, 3];

function progressDays(arr){
    let moreMiles = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i + 1]){
            moreMiles++;
        }//end if statement
    }// end for statement
    return moreMiles;
}// end function
console.log(progressDays(saturdayRuns));


// 35. Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

// let toPeel = [["a", "b", "c", "d"], ["e", "f", "g", "h"], ["i", "j", "k", "l"], ["m", "n", "o", "p"]];

// function peelIt(arr){
//         for(let i = 0; i < arr.length; i++){
//             if( arr[i] === i){
//                 arr.pop();
//                 arr.shift();
//             }
//         }//first loop end
//         return arr;
// }// end function
// console.log(peelIt(toPeel));


// // 36. Create a function that returns an array of strings sorted by length in ascending order.

// let arrSort = [`bb`, `ccc`, `dddd`, `a`];

// function sortByLength(arr){
//     arr.sort();
//     return arr;
// }
// sortByLength(arrSort);

// 37. Create a function that takes in an array of names and returns the name of the secret society.
// the secret society name is defined by the first letter of each name.

let secretMembers = [`ben`, `becky`, `olivia`, `emilee`, `amanda`];

function secretSociety(arr){
    let societyName = [];
    for(let i=0; i < arr.length; i++){
        societyName.push(arr[i][0]);
    }// end loop
    return societyName.join(societyName);
}// end function
console.log(secretSociety(secretMembers));

// 38. Write two functions:
// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

let numToArray = 3855;
let arrayToNum = [2, 5, 7, 3];

function toNumber(arr){
    arr.toString(arr);
    return arr;
}
console.log(toNumber(arrayToNum));

// FREE CODE CAMP INTERVIEW PREP
// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, 
// visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
// The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. 
// The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
// Implement a function to determine the state of the doors after the last pass. 
// Return the final result in an array, with only the door number included in the array if it is open.

// lets make open door = true

const doors = new Array(100).fill(false);

const newDoors = doors.map((door, index) => index +1);

console.log(newDoors);

// 39. Create a function that returns true if a string is empty and false otherwise.
//isEmpty("") ➞ true
//isEmpty(" ") ➞ false

function isEmpty(string){
    if(string.length >= 1){
        return false;
    }
    else {
        return true;
    }
}
console.log(isEmpty(``));

// 40. Create a function that takes a string and returns it as an integer.

function makeInteger(val){
    console.log(`in makeInteger`);
    return Number(val);
}
console.log(makeInteger(`366`));

// 41. Given a string, return true if its length is even or false if the length is odd.

function stringOdd(str){
    if(str.length % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

// 42. Swap the values of a and b

let a = 100;
let b = 200;

function swap(a, b) {
	const val = a;
	a = b
	b = val
	return [a, b]
}
console.log(swap(a, b));

// 43. Create a function that takes a word and returns the new word 
// without including the first character.

function removeFirstLetter(str){
    return str.substring(1);
    // string.substring(x) subtracts x positions from the beginning of the string
}
console.log(removeFirstLetter(`banana`));

// 44. Create a function that takes an array and a string as arguments and 
// returns the index of the string.

let fruits = ["Pineapple", "Orange", "Mango", "Coconut", "Guava"];

function indexOf(arr, x){
    // arr.indexOf(x) -- outputs the position of x within array
    return arr.indexOf(x);
}
console.log(indexOf(fruits, `Mango`));

// 45. Create a function that takes a string (a random name). If the last character of the 
// name is an "n", return true, otherwise return false.

function checkForLetter(str, letter){
    if(str[str.length - 1] === letter){
        return true;
    }
    else {
        return false;
    }
}
console.log(checkForLetter(`ben`, `f`));

// 46. Create a function that takes a string txt and a number n and returns 
// the repeated string n number of times.

function repeatedString(str, num){
    // string or variable.repeat(num) will repeat that str/var the number of times
    return str.repeat(num);
}
console.log(repeatedString(`ben`, 4));

//47. Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, 
// return the relation of that person to Luke.

let familyMembers = [
    {
    name: `Leia`,
    relation: `Sister`,
    },
    {
    name: `Han`,
    relation: `Brother in Law`,
    },
    {
    name: `R2-D2`,
    relation: `Droid`,
    },
    {
    name: `C3PO`,
    relation: `Interpreter`,
    },
    {
    name: `Darth Vader`,
    relation: `Father`,
    },
];

function familyRelation(arr, str){
    for(let person of arr){
        if(person.name === str){
            console.log(`Luke, I am your ${person.relation}`);
        }// end if statement
    }// end for loop
}// end function
familyRelation(familyMembers, `Darth Vader`);
familyRelation(familyMembers, `R2-D2`);
familyRelation(familyMembers, `Han`);

// 48. Create a function that takes an object as an argument and returns a string with facts about the city. 
// The city facts will need to be extracted from the object's three properties: name, population, continent

let worldCities = [
    {
        name: `USA`,
        population: 3022,
        continent: `North America`
    },
    {
        name: `New Zealand`,
        population: 841,
        continent: `Pacific`
    },
    {
        name: `Canada`,
        population: 1282,
        continent: `North America`
    },
    {
        name: `Morocco`,
        population: 5028,
        continent: `Africa`
    },
    {
        name: `Indonesia`,
        population: 2391,
        continent: `Indo-Pacific`
    },
    {
        name: `Greece`,
        population: 4920,
        continent: `Europe`
    },
];

let array = [1, 3, 5, 2, 4];
console.log(Math.max(...array));

//Math.max function returns the largest number. add ...arrayName when sorting an array.

function cityFacts(arr){
    let popArray = [];
    
    for(let city of arr){
        console.log(`City: ${city.name}, Population: ${city.population}, Location: ${city.continent}`);
    }// end loop
    // find and name highest population
    for(let city of arr){
        console.log(`adding ${city.name} population numbers`);
        popArray.push(city.population);
    }// end population loop
    Math.max(...popArray);
    for(let city of arr){
        if(Math.max(...popArray) === city.population){
            console.log(`The largest population is in ${city.name} with ${Math.max(...popArray)} people.`);
        }// end largest population statement
    }// end loop
}// end function
cityFacts(worldCities);

// 49. (Burglary Series 1)You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total 
// amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".


// *********** burglary series objects stolen
let itemsStolen = [
    {
        name: `ps5`,
        cost: 500,
        type: `tech`
    },
    {
        name: `tv`,
        cost: 1050,
        type: `tech`
    },
    {
        name: `models`,
        cost: 300,
        type: `hobby`
    },
    {
        name: `carpet`,
        cost: 50,
        type: `furniture`
    },
    {
        name: `couch`,
        cost: 800,
        type: `furniture`
    },
    {
        name: `ukulele`,
        cost: 250,
        type: `hobby`
    },
    {
        name: `ring`,
        cost: 3100,
        type: `one of a kind`
    },
    {
        name: `rascal`,
        cost: 1400,
        type: `pet`
    },
    {
        name: `alaska`,
        cost: 105,
        type: `travelGlass`
    },
    {
        name: `blue springs`,
        cost: 80,
        type: `travelGlass`
    },
];
// *********** burglary series objects stolen


function returnTotalLosses(arr){
    let totalLosses = 0;
    for(let item of arr){
        console.log(`adding ${item.name} with a price of ${item.cost}`);
        totalLosses += item.cost;
    }
    return totalLosses;
}
console.log(returnTotalLosses(itemsStolen));

// 50. (Burglary Series 2) You call your spouse to inform his/her most precious item is gone! 
// return the most expensive item on the list.

function mostValuableItem(arr){
    let priceList = [];
    for(let item of arr){
        priceList.push(item.cost);
        console.log(`${item.cost} pushed to priceList`);
    }// end loop
    console.log(priceList);
    console.log(Math.max(...priceList));
    let valuableItem = Math.max(...priceList);

    for(let item of arr){
        if(valuableItem === item.cost){
            console.log(`The item ${item.name} was worth ${item.cost}`);
            return valuableItem;
        }
    }
}
mostValuableItem(itemsStolen);

// 51. (Burglary Series 3) Your spouse is not concerned with the loss of material possessions 
// but rather with his/her favorite pet. Is it gone?!

function petNapping(arr){
    let petnapped = false;
    for(let item of arr){
        if(item.name === `rascal`){
            petnapped = true;
        }// end true
    }// end for loop
        if(petnapped === true){
            console.log(`They took the pet, too!`);
        }
        else if( petnapped === false){
            console.log(`Nope, the pet is safe!`);
        }
}// end function
petNapping(itemsStolen);

// 52. (Burglary Series 4) Did they take any of our Travel Glasses? Which one? what was it worth?

function searchTravelGlass(arr, search){
    let stolenTravelGlass = [];
    let totalGlasses = 0;
    for(let item of arr){
        if(item.type === search){
            console.log(`the travel glass ${item.name} was taken for ${item.cost}!`);
            stolenTravelGlass.push(item);
            totalGlasses += item.cost;
        }// end if statement
    }
    console.log(stolenTravelGlass);
    console.log(`they took ${totalGlasses} from our travel glasses!`);

}
searchTravelGlass(itemsStolen, `travelGlass`);

// 53. (Burglary Series 5) What was the third most expensive item that was stolen?
// .sort method. array.sort() returns values in 
// .reverse method. array.reverse() will return your array in opposite order
function thirdMostExpensive(arr){
    let arrayToSort = [];
    let thirdMost;
    for(let item of arr){
        arrayToSort.push(item.cost);
        console.log(`item ${item.name} cost was pushed`);
    }
    console.log(arrayToSort);
    arrayToSort.sort(function(a, b){return b-a});
    console.log(arrayToSort);
    thirdMost = arrayToSort[2];
    console.log(thirdMost);
    for(let item of arr){
        if(item.cost === thirdMost){
            console.log(`the item ${item.name} is the third most expensive at ${item.cost}`);
        }
    }
}
thirdMostExpensive(itemsStolen);

// it would pay to understand this code later

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return b-a}));

// ********************************




// JUST JAVASCRIPT LEARNING

// console.log({});
// console.log([]);
// console.log((x => x * 2));

// console.log(typeof([])); // "object"
// console.log(typeof(new Date())); // "object"
// console.log(typeof(/(hello|goodbye)/)); // "object"

// console.log(typeof(2)); // "number"
// console.log(typeof("hello")); // "string"
// console.log(typeof(undefined)); // "undefined"

// console.log(typeof{}); // "object"
// console.log(typeof[]); // "object"
// console.log(typeof (x => x * 2)); // "function"



// console.log(typeof(newArray));

// console.log(typeof(undefined));
// console.log(typeof(null)); //returns object
// console.log(typeof(true));

// console.log(typeof(typeof([]))); // object

// let reaction = `yikes`;
// reaction[0] = `l`;
// console.log(reaction); // yikes
// // this is because strings are primitive and
// // cannot be changed

// let pet = 'Narwhal';
// pet = `the kraken`;
// console.log(pet);

// JUST JAVASCRIPT END