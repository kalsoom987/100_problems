const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});
let numbers = prompt("Enter the two Number separated by the space ");
  let spaceindex=numbers.indexOf(" ");
   let part1 = numbers.substring(0,spaceindex)
   let part2 = numbers.substring(spaceindex+1)
    let firstNumber = Number(part1);
    let SecondNumber = Number(part2);
   

    function gcd(num1 , num2){
        while (num2 !==0)
        {
             
           let temp = num2;
            num2 = num1%num2;
           num1 = temp;


        }
        return num1
    }
    let  Result= gcd(firstNumber,SecondNumber);
    if (Result ==1){
        console.log( +firstNumber+  "and"  + SecondNumber+ "the number is coprime")
    }
    else{
        console.log( +firstNumber+  "and"  + SecondNumber+ "the number is not coprime")
    }