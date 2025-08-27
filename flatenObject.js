
let obj = {
  name: "Ali",
  age: 25,
  address: { city: "Lahore", zip: 54000 },
  skills: ["JS", "PHP"],
  married: null
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

console.log("🎉 Final Result:", result);