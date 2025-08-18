// find the duplicate in the array
let input =[2,3,5,6,6,8,4,8]
for(i=0;i<input.length;i++){
    var duplicate = false;

    for(j=i+1;j<input.length;j++){
        if(input[i]==input[j]){
           duplicate = true;
        }
    }
    if(duplicate){
        console.log(input[i])
    }
}