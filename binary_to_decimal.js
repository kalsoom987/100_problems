let num = 1100;
let temp = num;
let base = 1;
let decimal=0;
while(temp){
decimal+=(temp%10*base);
base=base*2;
temp=Math.floor(temp/10);
}
console.log(decimal);
