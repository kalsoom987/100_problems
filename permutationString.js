function permute(str, prefix = "", result = []) {
  if (str.length === 0) {
    result.push(prefix); 
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    permute(remaining, prefix + currentChar, result);
  }

  return result; 
}


console.log(permute("ABC"));  
console.log(permute("ABCD")); 
