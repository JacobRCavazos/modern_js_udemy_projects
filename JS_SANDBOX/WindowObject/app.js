// WINDOW METHODS / OBJECTS / PROPERTIES


// Alert

// alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width
// val = window.outerHeight;
// val = window.outerWidth;


// Inner height and width
val = window.innerHeight;
val = window.innerWidth;


// Scroll points - On sites where you show animations on scrolling down the page
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'https://google.com'
// window.location.reload();

// History Object

// window.history.go(0);

// val = window.history.length;

//Navigator Object

val = window.navigator;


console.log(val);
