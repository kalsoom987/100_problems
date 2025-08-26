function sortByKey(arr, key) {
  let n = arr.length;

  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      
      if (arr[j][key] > arr[j + 1][key]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }

    }
  }

  return arr;
}

let result = sortByKey(people, "age");
console.log(result);
