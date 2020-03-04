// Removing, replacing, or moving items in the array

let people = ["Marbella", "Allin", "Osvaldo", "Miguel", "Roberto", "Luis"];

function displayArray(anArray){
    for (let i=0; i<anArray.length; i++){
        console.log(anArray[i]);
    }
    console.log()
}
console.log("Original array: ")
displayArray(people)

// Splice returns the deleted items. Changes are 'in place'
console.log("Adding 'Jessica' to the array")
people.splice(2, 0, "Jessica");
displayArray(people)

let deletedPerson = people.splice(4, 1);
console.log(`Deleted ${deletedPerson} from the array...`);
displayArray(people);

deletedPerson = people.splice(5, 1, "Andres");
console.log(`Deleted ${deletedPerson} and added 'Andres' in its place:`);
displayArray(people);