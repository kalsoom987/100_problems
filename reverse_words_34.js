let input = "I have to reverse the sentence of the word ";
let result = "";
let word = "";


for (let i = 0; i <= input.length; i++) {
  
    if (i < input.length && input[i] !== ' ') {
        word += input[i]; 
    } else {
     
        for (let j = word.length - 1; j >= 0; j--) {
            result += word[j];
        }

      
        if (i < input.length) {
            result += ' ';
        }


        word = "";
    }
}

console.log(result);  
