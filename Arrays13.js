const colors = [
    ["red", "crimson"],
    ["orange", "dark orange"],
    ["yellow", "golden rod"],
    ["green", "olive"],
    ["blue", "navy blue"],
    ["purple", "orchid"]
];

console.log(colors[2][1]);

for (let i=0; i<colors.length; i++){
    for (let j=0; j<colors[i].length; j++){
        console.log(colors[i][j]);
    }
}