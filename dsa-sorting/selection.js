// Selection sort
// Assign the first element to be the smallest value (this is called the minimum). 
// (It does not matter right now if this actually the smallest value in the array.)
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
// If the “minimum” is not the value (index) you initially began with, swap the two values. 
// You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
    for (let i=0; i < arr.length-1; i++) {
        let min = arr[i];
        let minInd = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minInd = j;
            } 
        }
        if (i !== minInd ) {
            let temp = arr[minInd];
            arr[minInd] = arr[i];
            arr[i] = temp;
        }  
    }
    return arr;
}

module.exports = selectionSort;
