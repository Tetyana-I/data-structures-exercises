// Given two sorted arrays, write a function called merge which accepts two sorted arrays
// and returns a new array with values from both arrays sorted.
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

function merge(arr1, arr2) {
    const arr = [];
    let i = 0;
    let j = 0;
    while ((i < arr1.length) && (j < arr2.length)) {
        if (arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
        }
        if (arr1[i] > arr2[j]) {
            arr.push(arr2[j]);
            j++;
        }
    }
    if (i === arr1.length) {
        while (j < arr2.length ) {
            arr.push(arr2[j]);
            j++;
        }
    }
    if (j === arr2.length) {
        while (i < arr1.length ) {
            arr.push(arr1[i]);
            i++;
        }
    }
    return arr;
}

// Merge sort algorithm. 
// Given an array, this algorithm will sort the values in the array. 
// Here’s some guidance for how merge sort should work:
// Break up the array into halves until you can compare one value with another
// Once you have smaller sorted arrays, merge those with other sorted pairs until you are back at the full length of the array
// Once the array is merged back together, return the merged (and sorted!) array.

function mergeSort(arr) {
    let middle = Math.floor(arr.length/2);
    if (arr.length <= 1) return arr;
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left,right);
}

module.exports = { merge, mergeSort};
