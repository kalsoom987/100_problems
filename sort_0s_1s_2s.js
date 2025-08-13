function sort012(){
    let count0 = 0 , count1=0 , count2 = 0;
    for(let i =0 ; i<arr.length ; i++){
        if(arr[i]==0)
            count0++
        else if(arr[i]==1){
            count1++
        }
        else
            count2++;
    }
    index = 0;
    while(count0-->0) arr[index++]=0
    while(count1-- > 0)arr[index++]=1
    while(count2-- >0) arr[index++]=2
    return arr;
}
let arr =[0,1,2,0,0,1]
console.log(sort012(arr))