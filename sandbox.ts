// const character = 'mario';
//
// console.log(character);
//
// const inputs = document.querySelectorAll('input');
//
// inputs.forEach(input => {
//   console.log(input);
// });

// arrays
// Typescript limits you to what you initially created the array as
let names = ["Luigi", "Mario", "Yoshi"];
//I can do this
names.push('Toad');
// I cannot do this, as 3 is an int, yet we initialized this as a variable of strings
// names.push(3);

// you can have a mixed array, but you have to declare that at init
let mixed = ["ken", 4, "Chun-Li", 8, true];
mixed.push(10);
mixed.push("ryu");
mixed[0] = 3;

// Objects
let nina = {
  name: "mario",
  belt: "black",
  age: 30
};

// Each property of the object is now initialized to it's type (name = string, belt = string, age = int/float)
// and ninja will always be an object
// also, you cannot define new properties, once the object is initialized
