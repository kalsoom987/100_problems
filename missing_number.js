const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});
let input = prompt("Enter numbers separated by commas:"); 
let arr = [];
let num = "";

for (let i = 0; i <= input.length; i++) {
    if (input[i] !== ',' && i !== input.length) {
        num += input[i];
    } else {
        let number = 0;
        for (let j = 0; j < num.length; j++) {
            number = number * 10 + (num[j] - '0');
        }
        arr.push(number);
        num = "";
    }
}


let n = arr.length + 1;
let expectedSum = (n * (n + 1)) / 2;

// Calculate actual sum
let actualSum = 0;
for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}

// Missing number
let missing = expectedSum - actualSum;
console.log("Missing number is:", missing);
let arr =[2,5,8,9,3];
min=2;
max=9;
for(i=0;i<max ;i++)
{
    let missing_number = true;
    for(j=0;)
}





