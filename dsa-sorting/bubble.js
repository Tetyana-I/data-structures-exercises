// Looping from the each element: each pair of elements swapped if current element is bigger than the next one.
// So, the biggest value is bubbled to the end of an array. 

function bubbleSort(arr) {
    for (let i=1; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length-i; j++ ) {
            if (arr[j] > arr[j+1]) {
                swapped = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }  
        if (!swapped) break;      
    }
    return arr;
}

module.exports = bubbleSort;

console.log(bubbleSort([4, 20, 12, 10, 7, 9]));
