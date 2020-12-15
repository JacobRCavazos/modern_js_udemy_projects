const num1 = 100;
const num2 = 50;

let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // Moduless Operator for remainders

// Math Objects

val = Math.round(2.8);
val = Math.ceil(2.4); // Rounds Up
val = Math.floor(2.8); // Rounds Down
val = Math.sqrt(64); // Square Root
val = Math.abs(-3); // Gives the Absolute Number
val = Math.pow(8,2); // Exponents (8 to the second power)
val = Math.min(2,33,4,5,1,3); // Returns the minimum number
val = Math.max(2, 33, 4, 5, 1, 3); // Returns the max number
val = Math.random(); // Returns a random number
val = Math.floor(Math.random()  * 20 + 1); // Random number WITHOUT decimals from 1-20 (must wrap in math.floor to remove decimals)




console.log(val);
