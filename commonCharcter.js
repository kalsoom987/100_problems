// let str1 = "apple";
// let str2 = "plane";
// let common = "";


// for (let i = 0; i < str1.length; i++) {
    
//     for (let j = 0; j < str2.length; j++) {
//         if (str1[i] === str2[j]) {
//             common += str1[i];
//             str2[j] = " ";
//         }
//     }
// }

 

// for(i=0;i<common.length;i++){
//     var duplicate = false;

//     for(j=i+1;j<common.length;j++){
//         if(common[i]==common[j]){
//            duplicate = true;
//         }
//     }
//     if(duplicate){
//         (common[i])
//         common[i]==" ";
//     }
// }
// console.log("Common characters:", common);
let str1 = "apple";
let str2 = "plane";
let common = "";


for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            
            let already = false;
            for (let k = 0; k < common.length; k++) {
                if (common[k] === str1[i]) {
                    already = true;
                    break;
                }
            }
            if (!already) {
                common += str1[i];
            }
            break;
        }
    }
}

console.log("Common characters:", common);
 