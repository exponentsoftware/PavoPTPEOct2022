// // array & array methods & how to create, access & update 1D, 2D, 3D

// // One way to loop through an array, is using a for loop:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// // You can also use the Array.forEach() function:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";

// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }
const sample = ["a", 1, 2, 3, true, { Name: "Aliasger", Age:"28" }]
sample.push("Aliasger")
console.log(sample[5])

const sample1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(sample1[1] [1])
console.log(sample1 instanceof Array)

sample2 = [
    [[1, 2, 3],[4,5,6],[7,8,9]],
    [["A","B","C"],["D","E","F"],["G","H","I"]],
    [[true,false],[{Name:"Aliasger"},{Age:28}]],
]
console.log(sample2[2][1][0])

// The concat() method creates a new array by merging (concatenating) existing arrays


// https://www.w3schools.com/jsref/jsref_obj_array.asp
// Name	Description
// concat()	Joins arrays and returns an array with the joined arrays
// constructor	Returns the function that created the Array object's prototype
// copyWithin()	Copies array elements within the array, to and from specified positions
// entries()	Returns a key/value pair Array Iteration Object
// every()	Checks if every element in an array pass a test
// fill()	Fill the elements in an array with a static value
// filter()	Creates a new array with every element in an array that pass a test
// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// forEach()	Calls a function for each array element
// from()	Creates an array from an object
// includes()	Check if an array contains the specified element
// indexOf()	Search the array for an element and returns its position
// isArray()	Checks whether an object is an array
// join()	Joins all elements of an array into a string
// keys()	Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// length	Sets or returns the number of elements in an array
// map()	Creates a new array with the result of calling a function for each array element
// pop()	Removes the last element of an array, and returns that element
// prototype	Allows you to add properties and methods to an Array object
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// some()	Checks if any of the elements in an array pass a test
// sort()	Sorts the elements of an array
// splice()	Adds/Removes elements from an array
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length
// valueOf()	Returns the primitive value of an array