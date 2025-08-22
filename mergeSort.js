function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }

  
  let mid = Math.floor(arr.length / 2);


  let left = [];
  let right = [];

  for (let i = 0; i < mid; i++) {
    left[left.length] = arr[i];   
  }
  for (let i = mid; i < arr.length; i++) {
    right[right.length] = arr[i];
  }


  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);


  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  let result = [];
  let i = 0, j = 0, k = 0;


  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result[k] = leftArr[i];
      i++;
    } else {
      result[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    result[k] = leftArr[i];
    i++;
    k++;
  }


  while (j < rightArr.length) {
    result[k] = rightArr[j];
    j++;
    k++;
  }

  return result;
}


let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); 
