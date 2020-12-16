// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = [['Apple', 'Banana', 'Orange', 'Pear']];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

console.log(mixed);

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[5];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
numbers.push(250); // Add on to the end
numbers.unshift(45); // Add to the front
numbers.pop(); // Take off from the end
numbers.shift(); // Take off from the front

// Splice values
numbers.splice(1,3);

// Reverse array
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// USE THE COMPARE FUCTION TO SORT NUMERICAL 1 - 999
val = numbers.sort(function (x, y) {
  return x - y;
});

// or

val = numbers.sort(function (x, y) {
  return y - x; // flip to y - x to sort decending
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);




console.log(numbers);
console.log(val);
