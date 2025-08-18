let input = "a2b3c2";
let result = "";

for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char < '0' || char > '9') {  
        result += char; 
    }
}

console.log(result); 
