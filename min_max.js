let arr = [12, 34, 98, 56, 34];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Minimum:", min); 
console.log("Maximum:", max); 
