let colors = ["red", "orange", "blue", "yellow", "green"];

console.log(`These are my initial colors:\n\t${colors}`);

console.log(`The first color in the array is ${colors[0]}!`);

colors[0] = "purple";

console.log(`Now, the first color in the array is ${colors[0]}`);
console.log(`All the other colors have moved up a position:\n\t${colors}`);

// Appending to an array

colors[colors.length] = "black";

console.log(colors);
