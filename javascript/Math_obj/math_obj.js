
// In JavaScript, the Math object is a built-in global object that provides a collection of mathematical functions and constants. These functions and constants allow you to perform various mathematical operations in your JavaScript code. You do not need to create an instance of the Math object; you can directly access its properties and methods.

// Here are some common properties and methods of the Math object:

// This two is Constants in Math:

// PI value in Javascript
let piValue = Math.PI;
console.log(`The value of PI is: ${piValue}`);
// E value in javascript   
let eValue = Math.E;       
console.log(`The value of E is: ${eValue}`);

// Basic mathematical functions:

// Returns the absolute value of a number x.
let sub = 8 - 14;
console.log(sub);
// Check the difference
let absValue = Math.abs(sub);
console.log(`The absolute value is come whether its is positive or negative: ${absValue}`);

// Rounds a number x to the nearest integer.
let roundValue = Math.round(piValue);
console.log(`Rounds to the nearest values: ${roundValue}`);
let roundValue1 = Math.round(eValue);
console.log(`Rounds to the nearest values: ${roundValue1}`);

// Rounds a number x up to the nearest integer =>[because we can use ceil].
let ceilValue = Math.ceil(piValue);
console.log(`Rounds up to the nearest values: ${ceilValue}`);
let ceilValue1 = Math.ceil(eValue);
console.log(`Rounds up to the nearest values: ${ceilValue1}`);

// Rounds a number x down to the nearest integer =>[because we can use floor].
let floorValue = Math.floor(piValue);
console.log(`Rounds down to the nearest values: ${floorValue}`);
let floorValue1 = Math.floor(eValue);
console.log(`Rounds down to the nearest values: ${floorValue1}`);

// Return the maximum or minimum value from a list of numbers.
// using spread operator
let minValue = [1,99,-66,-69,88,-99,83,203,-402];
console.log(`Return the minimun Value: ${Math.min(...minValue)}`);
// without using spread operator
let maxValue = [1,99,-66,-69,88,-99,83,203,-402];
let max = Math.max.apply(null,maxValue);
console.log(`Return the maximun Value: ${max}`);

// Exponents and logarithms:

// Returns x(base value) raised to the power of y(expontial value)
let powValue = Math.pow(3,3);
console.log(`The value is: ${powValue}`);

// Returns the square root of x
let sqRoot = Math.sqrt(25);
console.log(`The value of square root is: ${sqRoot}`);
let sqRoot1 = Math.sqrt(40);
console.log(`The value of square root is: ${sqRoot1}`);
let sqRoot2 = Math.sqrt(66);
console.log(`The value of square root is: ${sqRoot2}`);
 