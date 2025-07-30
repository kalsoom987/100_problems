const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});
 let number = parseInt(prompt("Enter the number "));
 let count=0;
 let sum = 0;
 let temp = number;
 while(temp){
  
    count++;
    temp= Math.floor(temp/10);
   
 }

 console.log("the total digit in the number is" + count)


 
