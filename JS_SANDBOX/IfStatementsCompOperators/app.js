// if (something) {
//   do something 
// } else {
//   do something else
// }

const id = 100;

//EQUAL TO
if (id == 101) {
  console.log('correct');
} else {
  console.log('incorrect');
}

// NOT EQUAL TO
if (id != 101) {
  console.log('correct');
} else {
  console.log('incorrect');
}

//EQUAL TO & TYPE
if (id === 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}

// NOT EQUAL TO & TYPE
if (id !== 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}

if (id) {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// TEST IF UNDEFINED
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if (id >= 200) {
  console.log('correct');
} else {
  console.log('incorrect');
}

// IF ELSE
const color = 'black';

if (color === 'red') {
  console.log('Color is Red');
} else if (color === 'blue') {
  console.log('Color is Blue');
} else {
  console.log('Color is NOT Red or Blue');
}


// LOGICAL OPERATORS
const name = 'Steve';
const age = 20;

if (age > 0 && age < 12) {
  console.log(`${name} is a child.`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager.`);
} else {
  console.log(`${name} is an adult.`);
}

// OR ||

if (age < 16 || age > 65) {
  console.log(`${name} cannot run in the race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR - IF THIS IS TRUE DO THIS
console.log(id === 100 ? 'CORRECT' : 'INCORRECT')
