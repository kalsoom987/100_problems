function mergeArraysOnKey(arr1, arr2, key) {
  let merged = [];


  for (let i = 0; i < arr1.length; i++) {
    let obj1 = arr1[i];
    let match = null;

   
    for (let j = 0; j < arr2.length; j++) {
      if (obj1[key] === arr2[j][key]) {
        match = arr2[j];
        break;
      }
    }

  
    let newObj = {};
    for (let prop in obj1) newObj[prop] = obj1[prop];
    if (match) {
      for (let prop in match) newObj[prop] = match[prop];
    }
    merged.push(newObj);
  }

  // 4. Add extra items from arr2 (not in arr1)
  for (let j = 0; j < arr2.length; j++) {
    let exists = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i][key] === arr2[j][key]) {
        exists = true;
        break;
      }
    }
    if (!exists) merged.push(arr2[j]);
  }

  return merged;
}


const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const arr2 = [
  { id: 2, age: 25 },
  { id: 3, name: "Charlie", age: 30 }
];

console.log(mergeArraysOnKey(arr1, arr2, "id"));
