function removeDuplicates(array, key) {
  let seen = {};      
  let unique = [];    

  for (let i = 0; i < array.length; i++) {
    let value = array[i][key]; 

    if (!seen[value]) {        
      seen[value] = true;     
      unique.push(array[i]);   
    }
  }

  return unique;
}

let result = removeDuplicates(data, "id");
console.log(result);
