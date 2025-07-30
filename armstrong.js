const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});
    let digit_count = 0;
    let sum = 0;
    let number= Number(prompt("Enter the number "));
    let temp = number;
    while(temp){
        digit_count++;
         temp=parseInt(temp/10);
         
    }
   
    temp=number;
  

    while( temp){
   let reminder = temp%10;
   
   
    sum += Math.pow(reminder,digit_count)
   
      temp =parseInt(temp/10);

    }
    if(sum==number){
        console.log("the number is " +number+ " armstrong number ");

    }
    else{
        console.log("the number is not an " +number+ " armstrong number ");

    }
0