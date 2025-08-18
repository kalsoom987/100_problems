
let input = "convert each word to capitlize";
let output = "";

for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];

    
    if (i === 0 && currentChar >= 'a' && currentChar <= 'z') {
        let capitalChar = String.fromCharCode(currentChar.charCodeAt(0) - 32);
        output += capitalChar;
    }

    
    else if (input[i - 1] === ' ' && currentChar >= 'a' && currentChar <= 'z') {
        let capitalChar = String.fromCharCode(currentChar.charCodeAt(0) - 32);
        output += capitalChar;
    }

    
    else {
        output += currentChar;
    }
}

console.log(output);  
