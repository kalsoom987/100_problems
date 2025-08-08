let sentence = "this is a test this is only a test";
let words = [];
let word = "";


for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i];

    if (char !== " " && i !== sentence.length) {
        word += char; 
    } else {
        
        if (word !== "") {
            
            words.push(word);
            word = ""; 
        }
    }
}


let counted = [];

for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let count = 1;

    if (counted.includes(currentWord)) {
        continue; 
    }

    for (let j = i + 1; j < words.length; j++) {
        if (words[j] === currentWord) {
            count++;
        }
    }

    console.log(currentWord + ": " + count);
    counted.push(currentWord); 
}
