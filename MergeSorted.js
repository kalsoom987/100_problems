let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6 ,7 ,8];
let merged = [];
let a = 0; 
let b = 0; 
let c = 0;
while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
        merged[c] = arr1[a];
        a++;
    } else {
        merged[c] = arr2[b];
        b++;
    }
    c++;
}

while (a < arr1.length) {
    merged[c] = arr1[a];
    a++;
    c++;
}
while (b < arr2.length) {
    merged[c] = arr2[b];
    b++;
    c++;
}

console.log(merged);
