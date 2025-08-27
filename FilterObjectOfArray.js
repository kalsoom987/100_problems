function filterByProperty(array, key, value) {
  let result = [];   

  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      result.push(array[i]); 
    }
  }

  return result;
}


let users = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Sara", role: "user" },
  { id: 3, name: "Omar", role: "admin" }
];

let admins = filterByProperty(users, "role", "admin");
console.log(admins);
