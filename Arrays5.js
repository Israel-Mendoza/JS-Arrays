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

// Concat does not update the array in place
let everyone = friends.concat(foes)

for (let i=0; i<everyone.length - 1; i++){
    console.log(everyone[i])
}
