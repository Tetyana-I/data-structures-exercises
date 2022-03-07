// Insertion Sort
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// Repeat until the array is sorted.

function insertionSort(arr) {
    for (let i=1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while ((j >=0 ) && (arr[j] > current)) {
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = current;
    }
    return arr;
}

module.exports = insertionSort;
