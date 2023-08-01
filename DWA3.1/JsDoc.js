
// Question 1

// Please show how you applied a Markdown File to a piece of your code.

function greet(name) {
    return `Hello, ${name}!`;
};
  
console.log(greet("John"));

  
// Question 2

// Please show how you applied JSDoc Comments to a piece of your code

/**
 * Calculate the area of a rectangle.
 *
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} The area of the rectangle.
 */
function calculateRectangleArea(length, width) {
    return length * width;
;}



// Question 3
//@ts-check
const length = 5;
const width = 8;
const area = calculateRectangleArea(length, width);
console.log("The area of the rectangle is:", area);