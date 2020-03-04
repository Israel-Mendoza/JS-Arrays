// Check for the existence of an item within an array

let friends = ["Victor", "Fernando", "Sergio", "Renato"];

// .includes() method returns a boolean
console.log(`Is 'Gabriela' in the friends array? ${friends.includes("Gabriela")}`);
console.log(`Is 'Sergio' in the friends array? ${friends.includes("Sergio")}`);


// Check the index of a given item in an array

// .indexOf() returns the index of an item in an array. Returns -1 if not found
console.log(`Where is 'Sergio' in the friends array? Position: ${friends.indexOf("Sergio")}`);
console.log(`Where is 'Luis' in the friends array? Position: ${friends.indexOf("Luis")}`);
console.log(`Where is 'Victor' in the friends array? Position: ${friends.indexOf("Victor")}`);
