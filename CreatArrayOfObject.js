

function convertArrayToObject(array) {
  let result = {}; 

  for (let i = 0; i < array.length; i++) {
    let item = array[i];      
    let key = item.id;        
    result[key] = item;       
  }

  return result;
}

let arr = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "John" }
]
let obj = convertArrayToObject(arr);
console.log(obj);
