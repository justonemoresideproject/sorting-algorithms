function selectionSort(arr) {
    function swap(idx, idx2){
        let temp = arr[idx];
        arr[idx] = arr[idx2];
        arr[idx2] = temp;
    }

    for(let i = 0; i < arr.length; i++){
        let lowIdx = i;
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[lowIdx]){
                lowIdx = j;
            }
        }
        if(lowIdx != i){
            swap(i, lowIdx);
        }
    }

    return arr;
}

module.exports = selectionSort;