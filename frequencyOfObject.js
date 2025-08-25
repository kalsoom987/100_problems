let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let freq = {};  // empty object

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];

  if (freq[value] === undefined) {
    freq[value] = 1;   // first time
  } else {
    freq[value] = freq[value] + 1;  // increase count
  }
}

console.log(freq);
                      