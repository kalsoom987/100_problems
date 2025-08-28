function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; 
  }


  if (Array.isArray(obj)) {
    let copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  
  let copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
}


let person = {
  name: "Ali",
  hobbies: ["coding", "cricket"],
  address: {
    city: "Lahore",
    location: { lat: 30.1, lng: 74.3 }
  }
};

let copied = deepClone(person);
copied.address.city = "Karachi";
copied.hobbies[0] = "gaming";

console.log("Original:", person);
console.log("Copied:", copied);
