let str = "He@ll#o$ Wo%rl^d123!";
let cleanStr = "";

for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (
        (code >= 65 && code <= 90) ||     // A-Z
        (code >= 97 && code <= 122) ||    // a-z
        (code >= 48 && code <= 57)        // 0-9
    ) {
        cleanStr += str[i];  
    }
}

console.log(cleanStr);  
