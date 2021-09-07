function insertionSort(arr) {
    function insert(arr, idx, idx2){
        arr.splice(idx, 0, arr[idx2])
        arr.splice(idx2 + 1, 1)
    }
    for(let i = 0; i < arr.length; i++){
        let j = i - 1;
        while((arr[i] < arr[j]) && j > 0){
            insert(arr, j, i)
            i--;
            j--;
        }
    }
    return arr;
}

module.exports = insertionSort;