


//  1-Variables

// var variableName = value
    // Can be reassigned and are only available inside the function they're created in. Its function scoped.

// const variableName = value
    // Cannot be reassigned and not accessible before they appear within the code. Its block scoped.

// let variableName = value
    // It can be reassigned but its similar to const i.e. block scoped.

// If variables are not created inside a function or block they are globally scoped.
// Primitive Data Types:

// -Number ------> 5, 6.5, 7 etc
let number = 5;
// -String ------> “Hello everyone” etc
let string = "Hello";
// -Boolean ------> true or false
let Boolean = true;
let boolean = false;
// -Null ------> represents null i.e. no value at all
let Null = null;
// -Undefined ------> A variable that has not been assigned a value is undefined.
// -Symbol ------> used as an identifier for object properties.

// Non-Primitive Data Types:
// -Object
// -Array
// -RegExp




// 2-Operators

// Basic Operators(+,-,/,*,**,(),%,++,--)
// Comparison Operators(==,===,!=,!==,>,<,>=,<=)
// Logical Operators(&&,||,!)
// Bitwise Operators(&,|,~,^,<<,>>,>>>)




// 3-Functions


// Normal Function Declaration
function name (parameter) {

  // statements
}

// Function stored in a variable
let name = function (parameter) {

  // statements
}

// Arrow Function
const name = (parameter) => {

  // statements
}




// 4-Conditional Statements

// If - Else Statements
if (condition) {
// code to be executed if the
    // condition is true

} else {
// code to be executed if the
    // condition is false

}




// If - Else If - Else Statements
if (condition1) {
   // code to be executed if the
    //   condition is true


} else if (condition2) {
   // code to be executed if the
    //   condition1 is false and
    //   condition2 is true


} else {
   // code to be executed if
    //   condition1 is false and
    //   condition2 is false

}





// Switch Statement
switch(expression) {
    case x:

    // code block

        break;

    case y:

    // code block

        break;

    default:

        // code block

}


// Ternary Operator
condition ? exprIfTrue : exprIfFalse



// Truthy / Falsy Values

// FALSY Values
// + false
// + 0 (zero)
// + "", '', `` (empty strings) + null
// + undefined
// + NaN (not a number)
// Note : Empty array ([]) is not falsy
// TRUTHY Values
// + Everything that is not FALSY







// 5-String Methods

// string[index]
// get a certain character of a string

// string.length
// return the number of characters in a string

// string.split(' ')
// returns an array of words of a string

// string.split('')
// returns an array of characters of a string

// string.toLowerCase() returns a lowercased string

// string.toUpperCase() returns an uppercased string

// string.charAt(index)
// returns a new string consisting of the single character located at the specified offset into the string.

// string.replace(substr, newSubstr)
// returns a new string with a substring (substr) replaced by a new one (newSubstr).

// string.includes(searchString)
// performs a case-sensitive search to determine whether one string may be found within another string, returns true or false.

// string.substr(start, length)
// returns a portion of the string, starting at the specified index and extending for a given number.

// string.includes('subtring')
// checks whether a substring exists inside of a string [check the character case]

// string.indexOf(searchValue)
// returns the index of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

// string.lastIndexOf(searchValue)
// returns the index of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

// string.slice(beginIndex, endIndex)
// extracts a section of a string and returns it as a new string, without modifying the original string.






// 6-Array Methods

//  array[index]
// returns a certain value from an array

// push(value)
// adds the value to the end of the array

// pop()
// removes the value from the end of the array

// shift()
// removes the value from the start of the array

// unshift(value)
// adds the value to the start of the array

// splice(fromIndex, no_of_elements)
// removes the number_of_elements, starting from fromIndex from the array

//  slice(fromIndex, toIndex) copies a certain part of the array

// concat()
// Join several arrays into one

// join('')
// returns a string of array values

// array.length
// returns the number of elements in the array

// reverse()
// reverse the order of the elements in an array

// toString()
// returns a string representing the specified array and its elements.

// toString()
// returns a string representing the specified array and its elements.

// includes(searchElement)
// determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// sort()
// It sorts the elements of an array in place and returns the sorted array. It sorts an array alphabetically.

// indexOf(searchElement)
// returns the index of the first occurance of that value

// lastIndexOf(searchElement)
// returns the index of the last occurance of that value








// 7-Looping

// For Loop
for (st=1; st=2; st=3) {

     // code block to be executed

}
// st 1 is executed (one time) before the execution of the code block.
// st 2 defines the condition for executing the code block.
// st 3 is executed (every time) after the code block has been executed.


// While Loop
while (condition) {

  // code block to be executed

}

// Do While Loop
do {

  // code block to be executed

}

while (condition);


// For In Loop
for (key in object) {

     // code block to be executed
}

// For Of Loop
for (variable of iterable) {

  // code block to be executed
}










// 8-Array methods for looping
array.forEach()
// It executes a provided function once for each array element.
array.forEach((element, index) => {

 // code block to be executed

})


array.map()
// It creates a new array populated with the results of calling a provided function on every element in the calling array.
array.map((element, index) => {

  // code block to be executed

})



array.filter()
// It creates a new array with all elements that pass the test implemented by the provided function.
array.filter((element, index) => {

  // code block to be executed
})



array.findIndex()
// It returns the index of the first element in the array that satisfies the provided testing function
array.findIndex((el, idx, arr) => {

  // code block to be executed

});



array.some();
// It tests whether at least one element in the array passes the test implemented by the provided function
array.some((el, index, array) => {

  // code block to be executed

});



array.every()
// It tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
array.every((element, index) => {

  // code block to be executed

})




array.reduce()
// It runs a function on each array element to produce (reduce it to) a single value. It works from left-to-right.
array.reduce((prevValue,currentValue, currentIndex, array) => {

  // code block to be executed

})




array.reduceRight()
// It runs a function on each array element to produce (reduce it to) a single value. It works from right-to-left.
array.reduceRight((accumulator,
currentValue, index, array) => {

  // code block to be executed
})


