function bubbleSort(arr) {
    let swapped = true;
    let length = arr.length - 1;
    function swap(arr, idx){
        let temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
    }
    while(swapped){
        swapped = false;
        for (let i = 0; i < length; i++){
            if(arr[i] > arr[i + 1]){
                swap(arr, i);
                swapped = true;
            }
        }
        length--;
    }
    return arr;
}

module.exports = bubbleSort;