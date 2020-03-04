/*Merging two or mor arrays*/

let friends = [
    "Victor",
    "Carlos",
    "Fernando"
]

let foes = [
    "Gabriela",
    "Raul",
    "Farid",
    "Judith"
]

let norFriendsOrFoes = ["Miguel", "Luis", "Kia"]

// Concat does not update the array in place
let everyone = friends.concat(foes, norFriendsOrFoes)

function displayArray(anArray){
    for (let i=0; i<anArray.length; i++){
        console.log(anArray[i]);
    }
    console.log()
}

displayArray(friends);
displayArray(foes);
displayArray(everyone);
