// perfect number is the positive number which is equal to the sum of its divisors 
const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});
let number = parseInt(prompt("Enter the number"))
let sum=0;
for(i=1; i<number;i++)
{
   if(number%i ==0) {
    sum +=i;
   }

}
if(sum==number){
    console.log("the number" + number + "is perfect number ")
}
else{
    console.log("the number" + number + " is not  perfect number ")
}