function firstUniqueChar(str) {
       for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let found = false;

        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[j] === currentChar) {
                found = true;
                break;
            }
        }

       
        if (!found) {
            return currentChar;
        }
    }

                                           
    return '$';
}

let s = "racecar";
console.log(firstUniqueChar(s));  
