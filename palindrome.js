
const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});

let ispalindrom = prompt("enter any number");
const originalString = ispalindrom;

function reverse1(str){
   
    

    var r = "";
    for(let i = str.length-1; i >= 0; i--){
      r += str[i];
    }
    return r;
  }

  const reversedString = reverse1(originalString);
  if(originalString==reversedString){
    console.log("the number you Enter is palindrom")
  }
  else {
    console.log("the number you enter is not a palindrom")
  }

  

