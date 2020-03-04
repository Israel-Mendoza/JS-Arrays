// Slices

let people = ["Marbella", "Allin", "Osvaldo", "Miguel", "Roberto", "Luis"];

let threePeople = people.slice(0, 3);
// If passed only a number, it will be the start and will go till the end
let lastTwoPeople = people.slice(4);
// Going backwards
let lastThreePeople = people.slice((-3));
// Making a copy of the array
let oldPeople = people.slice();

console.log(threePeople);
console.log(lastTwoPeople);
console.log(lastThreePeople);
console.log(oldPeople);