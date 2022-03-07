/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

// It will help to accept three arguments:
// an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array;
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element,
// increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index

function pivot(arr, start=1, end=arr.length-1) {
    let pivot = arr[0];
    let pivotInd = 0;
    while (start < end) {
        if ((arr[start] > pivot) && (arr[end] < pivot)) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
        if (arr[start] < pivot) {
            pivotInd = start;
            start ++;
        }
        if (arr[end] > pivot) end --;
    }
    arr[0] = arr[pivotInd];
    arr[pivotInd] = pivot;
    return pivotInd;
}


/*
quickSort accepts an array, left index, and right index
*/

function quickSort() {}

module.exports =  {quickSort, pivot};