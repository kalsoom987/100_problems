function bubbleSort(arr) {
    let n = arr.length;
    
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

       
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
          
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

      
        if (!swapped) break;
    }

    return arr;
}


let numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); 
