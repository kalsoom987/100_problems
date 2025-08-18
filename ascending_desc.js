let arr= [2,5,8,7,6,4];
for(i=0; i<arr.length;i++){
    for(j=i+1; j<arr.length;j++)
    {
      if(arr[i]<arr[j]){
        let temp;
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
}
console.log("your array in descending order");
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


console.log("your array in ascending order");
for(i=arr.length-1;i>=0;i--)
{
    console.log(arr[i]);
}