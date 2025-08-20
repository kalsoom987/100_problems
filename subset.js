function findSubsets(arr) {
    let subsets = [];

    function backtrack(start, current) {
        
        let temp = [];
        for (let i = 0; i < current.length; i++) {
            temp[i] = current[i];
        }
        subsets[subsets.length] = temp;

        
        for (let i = start; i < arr.length; i++) {
            current[current.length] = arr[i]; 
            backtrack(i + 1, current);
            current.length = current.length - 1; 
        }
    }

    backtrack(0, []);
    return subsets;
}


let set = [1, 2, 3];
let result = findSubsets(set);


for (let i = 0; i < result.length; i++) {
    let str = "";
    for (let j = 0; j < result[i].length; j++) {
        str += result[i][j] + " ";
    }
    console.log("{" + str.trim() + "}");
}
