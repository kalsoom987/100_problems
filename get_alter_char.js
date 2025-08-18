function getAlternateChar(){
    var result = "";
    for(var i=0; i<str.length;i +=2){
        result +=str[i]
    }
    return result
}
str ="hello world"
console.log(getAlternateChar("hello world"))
