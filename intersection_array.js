let arr1 = [1, 2, 2, 3];
let arr2 = [2, 2, 4];
let intersection = [];

for (let i = 0; i < arr1.length; i++) {
    let found = false; 

    for (let k = 0; k < intersection.length; k++) {
        if (intersection[k] === arr1[i]) {
            found = true;
            break;
        }
    }

   
    if (!found) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                intersection.push(arr1[i]);
                break; 
            }
        }
    }
}

console.log("Intersection:", intersection);
