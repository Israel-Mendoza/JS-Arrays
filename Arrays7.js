// Reversing an array "in place"

let friends = ["Victor", "Fernando", "Sergio", "Renato"];

function displayArray(anArray){
    for (let i=0; i<anArray.length; i++){
        console.log(anArray[i]);
    }
    console.log()
}

displayArray(friends);

friends.reverse();

displayArray(friends)
