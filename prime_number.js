// find the prime number in the arraay

const prompt = require("prompt-sync")({
    'fake_val': 'OPTIONAL CONFIG VALUES HERE'
});
let primeNumber= prompt("Enter the number ");
 var number = parseInt(primeNumber);
   var isprime = true;
 for(i=2 ; i<number ; i++){
    if ( number%i==0){
         isprime = false;
    }
   
 }
if(isprime){

    console.log("the number is prime ");
}
else {
    console.log("the number is not prime");
}







