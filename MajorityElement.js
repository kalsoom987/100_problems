function PeakElement(){
    let n = arr.length;
    if(n===1)
        return 0;
    if(arr[0]>arr[1])
        return 0;
    if(arr[n-1]>arr[n-2])
        return n-1;
    let lo = 1, hi=n-2;
    while(lo<=hi){
        let mid = lo+Math.floor((hi-lo/2));
        if(arr[mid]>arr[mid-1]&&arr[mid]>arr[mid+1])
            return mid;
        
    }
}