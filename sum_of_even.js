function sumofEven(start ,end){
    var sum = 0;
    for(var i = start; i<=end ;i++){
        if(i%2 ===0){
            sum += i;
        }
    }
    return sum
}
console.log(sumofEven(1,10));