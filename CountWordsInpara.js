function countWords(paragraph) {
 
  let text = "";
  for (let i = 0; i < paragraph.length; i++) {
    let ch = paragraph[i];

    if (ch >= "A" && ch <= "Z") {
      text += String.fromCharCode(ch.charCodeAt() + 32);
    } 
 
    else if (
      (ch >= "a" && ch <= "z") || 
      (ch >= "0" && ch <= "9") || 
      ch === " "
    ) {
      text += ch;
    }
  
  }

  
  let word = "";
  let counts = {};

  for (let i = 0; i <= text.length; i++) {
    let ch = text[i];

    if (ch === " " || i === text.length) {
      if (word.length > 0) {
      
        if (counts[word]) {
          counts[word]++;
        } else {
          counts[word] = 1;
        }
        word = ""; 
      }
    } else {
      word += ch; 
    }
  }

  return counts;
}


let paragraph = "Hello, hello! I love coding. Coding is fun, and I love it.";
console.log(countWords(paragraph));