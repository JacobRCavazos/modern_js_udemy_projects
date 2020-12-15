const firstName = 'William';
const lastName = 'Johnson';
const age = 40;
const str = 'Hello there my name is Brad'
const tags = 'web design, web dev'
let val;

val = firstName + lastName;
// Concatentation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

//Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf() 
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1); // returns the last character of a string

// substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 4);

// split
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jacob');

// includes()
val = str.includes('Hello');


console.log(val);
