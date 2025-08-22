function isValidNumber(str) {
    if (str.length === 0) return false;

    let hasDecimal = false;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (i === 0 && ch === '-') {
            continue; 
        }

        if (ch === '.') {
            if (hasDecimal) return false; 
            hasDecimal = true;
            continue;
        }

        if (ch < '0' || ch > '9') {
            return false; 
        }
    }

    return true;
}

console.log(isValidNumber("123"));     // true
console.log(isValidNumber("-45.67"));  // true
console.log(isValidNumber("12a3"));    // false
console.log(isValidNumber("..123"));   // false
console.log(isValidNumber(""));        // false
