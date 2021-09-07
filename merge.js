function merge(n, m) {
    let i = 0;
    let j = 0;
    let arr = []
    while(i < n.length && j < m.length){
        if(n[i] < m[j]){
            arr.push(n[i])
            i++
        } else {
            arr.push(m[j])
            j++
        }
    }
    while(i < n.length){
        arr.push(n[i])
        i++
    }
    while(j < m.length){
        arr.push(m[j])
        j++
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length == 1){
        return arr
    }
    console.log(arr)
    // console.log(arr.slice(0, Math.floor(arr.length / 2)))
    // console.log(arr.slice(Math.floor(arr.legnth / 2), arr.length))
    return this.merge(mergeSort(arr.splice(arr.length / 2)), mergeSort(arr))
}

module.exports = { merge, mergeSort};