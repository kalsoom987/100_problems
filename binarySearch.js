function binarySearch(arr,target){
    let low = 0 ,high =arr.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid]===target)
            console.log("the target element is found that is  " , arr[i])
        if(arr[mid]<target){
            low = mid+1;
           
        }
        else{
            high =mid-1 
        }
    }
    return false;
}
let arr=[1,3,5,7]
console.log(binarySearch(arr,7))