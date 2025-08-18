
<<<<<<< Updated upstream
=======
function sumUntilSingleDigit(num) {
    while (num >= 10) {    
        let sum = 0;

       
        while (num > 0) {
            sum += num % 10;         
            num = Math.floor(num/10); 
        }

        num = sum;  
    }
    return num;
}

console.log(sumUntilSingleDigit(9875)); 

>>>>>>> Stashed changes
