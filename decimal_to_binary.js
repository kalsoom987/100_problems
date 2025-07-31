var num= 12;
let arr=[];
let index = 0;
var temp =num;
console.log(temp);
while(temp){
    rem=temp%2;
    arr[index]=rem;
  //  console.log(arr[index]);
    index++;
    //console.log(index);
    temp = Math.floor(temp/2);
   // console.log(temp);
}
for(i = index-1;i>=0;i--){
    console.log(arr[i]);
}