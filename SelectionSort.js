function SelectionSort(){
    let n = arr.length;
    for(let i =0; i<n-1;i++){
        let minIndex = i;
        for(let j=i+1;j<n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
  return arr;
}
let arr= [5 ,6,3,9,10]
console.log(SelectionSort(arr));