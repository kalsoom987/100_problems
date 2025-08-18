let arr = [2,4,1,3];
function CountInvrsions(){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            count++;
        }
    }
    }
    return count;
}

console.log("inversion:", CountInvrsions(arr));