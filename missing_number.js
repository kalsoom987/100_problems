
let arr =[2,5,8,9,3];
min=2;
max=9;
for(i=2;i<max ;i++)
{
    var missing_number = true;
    for(j=0; j<arr.length;j++){
        if(i===arr[j]){
            missing_number=false;
        }

    }
    if(missing_number){
        console.log("the missing number are" + i);
    }   
}






