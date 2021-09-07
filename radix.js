// found on udemy
function get(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function radixSort(arr) {
    let highest = 0;
    for(let i = 0; i < arr.length - 1; i++){
        const numString = arr[i].toString().length;
        if(numString > highest){
            highest = numString
        }
    }
    // const arr0 = [];
    // const arr1 = [];
    // const arr2 = [];
    // const arr3 = [];
    // const arr4 = [];
    // const arr5 = [];
    // const arr6 = [];
    // const arr7 = [];
    // const arr8 = [];
    // const arr9 = [];
    for(let i = 0; i < highest; i++){
        // took buckets from Udemy
        let buckets = Array.from({length: 10}, () => [])
        for(let j = 0; j < arr.length; j++){
            const num = get(arr[j], i)
            buckets[num].push(arr[j])

            // switch(num) {
            //     case 0: 
            //         arr0.push(arr[j])
            //         break;
            //     case 1: 
            //         arr1.push(arr[j])
            //         break;
            //     case 2: 
            //         arr2.push(arr[j])
            //         break;
            //     case 3: 
            //         arr3.push(arr[j])
            //         break;
            //     case 4: 
            //         arr4.push(arr[j])
            //         break;
            //     case 5: 
            //         arr5.push(arr[j])
            //         break;
            //     case 6: 
            //         arr6.push(arr[j])
            //         break;
            //     case 7: 
            //         arr7.push(arr[j])
            //         break;
            //     case 8: 
            //         arr8.push(arr[j])
            //         break;
            //     case 9: 
            //         arr9.push(arr[j])
            //         break;
            // } 
        }
        arr = [].concat(...buckets)
    }
    return arr;
}

// module.exports = radixSort;