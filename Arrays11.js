// Sorting

let people = ["Marbella", "Allin", "Osvaldo", "Miguel", "Roberto", "Luis"];
let numbers = [1, 5, 50, 250, 30, 1000000, 2, 25, 20000, 65, 500000, 9]

function displayArray(anArray){
    for (let i=0; i<anArray.length; i++){
        console.log(anArray[i]);
    }
    console.log()
}

console.log("Original people array: ");
displayArray(people);

// Sorting the array 'in place'
people.sort()

console.log("Sorted people array: ");
displayArray(people);

console.log("Original numbers array: ");
displayArray(numbers);

// Sorting the array 'in place'. Integers are converted into a string first if no sorting function is passed
numbers.sort((a, b) => a - b);

console.log("Sorted numbers array: ");
displayArray(numbers);

