


// PROBLEM 1 - Basic Function Definitions
//

// Define 1 function using both Function Definition and Function Expression formats.

// For the function definition format, label the function as; squarePrintFuncDef

// For the function expression format, label the function as; squarePrintFuncExpress

// These functions should take a single input, which will be a Number.

// Each function should;

// 1. square this number

// 2. then print the result as a string to the console log, behind the text "The result is: "


//  As an example, if squarePrintFuncDef( 2 ) is called,

//  it should print "The result is: 4" to the web console.


// Your code goes here




// Function Calls - DO NOT ALTER 
//squarePrintFuncDef( 2 );
//squarePrintFuncExpress( 2 ); 
//Declaration

function squarePrintFuncDef(a) {
  var result = a * a;
  return result;
}
var sum = squarePrintFuncDef(2);
console.log("The result is: "  + sum);

let squarePrintFuncExpress = function(a) {
  return a * a;
};

let result =  squarePrintFuncExpress(2);
console.log("The result is: "  + result);

//PROBLEM 2 - Minimum


// Last week introduced the standard function Math.min() that returns its smallest argument. 
//We can do that ourselves now. Write a function min() that takes two arguments and returns their minimum.



// Function Calls - DO NOT ALTER console.log( min(0, 10) );

// → 0 console.log( min(0, -10) );

// → -10



function min(a, b) {
  if(a < b)
  return a;
 else
  return b;
}

console.log(min(0, 10));
console.log(min(0, -10));



//PROBLEM 3 - Letter Counting

// Write a function called countChar() that takes a string as its first argument, and takes a second argument that indicates a character. 
//The function should then return a Number, representing the number of times that letter occurs in the string.

// Your program should output something like the following;
// Function Calls - DO NOT ALTERconsole.log( countChar("BBC", "B") );

// → 2console.log( countChar("kakkerlak", "k") );

// → 4console.log( countChar("michael", "M") );

// → 0



function countChar(str, ch) {
  var count = 0;
  for (var i = 0; i < str.length; i++)
    if (str.charAt(i) == ch)
      count += 1;
  return count;
}

function countAs(str) {
  return countChar(str, "A");
}

console.log(countAs("All In All It's All We Are."));


//PROBLEM 4 - The sum of a range


// Write a range function ( 'range()' ) that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. 
//If no step is given, the array elements go up by increments of one, corresponding to the old behavior. 
//The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
//Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

//Finally, write a sum function ( 'sum()' ) that takes an array of numbers and returns the sum of these numbers.


// Function Calls - DO NOT ALTER
//console.log( range(1, 10) );
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log( range(5, 2, -1) );

// → [5, 4, 3, 2]
//console.log( sum(range(1, 10)) );
// → 55


function range(start, end, stepvalue) {
  var rangeArray = [];

  if (!stepvalue) {stepvalue = 1;}

  if (start <= end) {
    for (var x = start; x <= end; x += stepvalue) {
      rangeArray.push(x);
    }
      } else {
      for (var x = start; x >= end; x +=stepvalue) {
        rangeArray.push(x);
      }
    }
  return rangeArray;
}


function arraySum(innerArray){
  let s = 0;
  for(let x = 0; x < innerArray.length; x++) {
    s += innerArray[x];
  }
  return s;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log( arraySum(range(1, 10)) );
