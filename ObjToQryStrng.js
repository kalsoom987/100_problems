let obj = {
  name: "Ali",
  address: {
    city: "Lahore",
    country: {
      code: "PK",
      name: "Pakistan"
    }
  }
};


function flattenObject(obj, parent = "", res = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parent ? parent + "." + key : key;

      if (typeof obj[key] === "object" && obj[key] !== null) {
      
        flattenObject(obj[key], newKey, res);
      } else {
        
        res[newKey] = obj[key];
      }
    }
  }
  return res;
}
let result = flattenObject(obj);

console.log( "Final Result:", result);


