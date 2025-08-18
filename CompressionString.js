var inputString = "aabbbcc";
let result= "";
let count=1;
for(i=0;i<inputString.length-1;i++){
    if(inputString[i]==inputString[i+1]){

    
        //  result += inputString[i];
         count++;
    }
    else{
      result+=inputString[i]+count;
      count=1;
    }
}
result += inputString[inputString.length-1]+count;
console.log(result);