let arr = [2, -3, 5, -1, 7, -8, 10];
let newArr = [];
let index = 0; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        newArr[index] = arr[i]; 
        index++;
    }
}

console.log(newArr);
