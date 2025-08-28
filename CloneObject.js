function deepClone(obj, level = 0) {
  // har level pe indent bana rahe hain for clarity
  let indent = " ".repeat(level * 2);

  // agar null ya primitive value hai toh directly return kar do
  if (obj === null || typeof obj !== "object") {
    console.log(indent + "Returning primitive:", obj);
    return obj;
  }

  // agar array hai toh naya array banao
  if (Array.isArray(obj)) {
    console.log(indent + "Cloning array:", obj);
    let copy = [];
    for (let i = 0; i < obj.length; i++) {
      console.log(indent + "-> Going inside index", i);
      copy[i] = deepClone(obj[i], level + 1);
    }
    console.log(indent + "Finished array:", copy);
    return copy;
  }

  // agar object hai toh naya object banao
  console.log(indent + "Cloning object:", obj);
  let copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(indent + "-> Going inside key:", key);
      copy[key] = deepClone(obj[key], level + 1);
    }
  }
  console.log(indent + "Finished object:", copy);
  return copy;
}

// Example
let original = {
  name: "Kalsoom",
  age: 23,
  hobbies: ["reading", "coding", { type: "sport", name: "cricket" }],
  address: {
    city: "Okara",
    country: "Pakistan"
  }
};

let cloned = deepClone(original);

console.log("Original:", original);
console.log("Cloned:", cloned);
console.log("Are they same object?", original === cloned); // false
console.log("Nested check:", original.hobbies === cloned.hobbies); // false
