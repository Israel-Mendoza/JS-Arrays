// CONST & ARRAYS

// The contents of a constant array may be changed.
// What cannot be changed is the reference of the array (assigning a new array to the constant)

const myEggs = ["brown", "brown"];
myEggs[1] = "White";
myEggs.push("blue", "Red");
myEggs.pop();
console.log(myEggs)
