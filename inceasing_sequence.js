function IncreasingSubsequence(){
    var result=[];
    result[0]= arr[0]
    for(var i=1 ;i<arr.length ;i++){
        if(arr[i]>arr[i-1]){
            result[result.length]=arr[i]
        }
    }
    return result
}
var arr = [1,2,3,1,2,5]
var seq = IncreasingSubsequence(arr)
console.log(seq);