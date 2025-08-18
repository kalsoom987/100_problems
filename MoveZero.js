// let arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
// let pos = 0;


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         arr[pos] = arr[i];
//         pos++;
//     }
// }


// for (let i = pos; i < arr.length; i++) {
//     arr[i] = 0;
// }

// console.log(arr);

function moveZerosTwoPointers(arr) {
    let pos = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            
            [arr[pos], arr[i]] = [arr[i], arr[pos]];
            pos++;
     }
    }
    return arr;
}

console.log(moveZerosTwoPointers([0, 1, 0, 3, 12]));
