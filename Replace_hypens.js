let str = "I want to add hypen in place of spaces"
let newStr="";
for(let i=0; i<str.length;i++){
    if(str[i]===' '){
        newStr+= '-'
    }
    else{
        newStr+=str[i];
    }
}
console.log(newStr);