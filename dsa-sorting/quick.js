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
// import { merge } from './merge.js';
const merge = require('./merge');

function pivot(arr, start=1, end=arr.length-1) {
    function swap (arr, a, b) {
        [arr[a], arr[b]] = [arr[b], arr[a]];
        }
    if (arr.length < 2) return 0;
    let pivot = arr[0];
    let pivotInd = 0;
    while (start < end) {
        // scenario 1: need to swap right and left values if left value is greater than pivot and right is smaller or equal pivot value
        if ((arr[start] > pivot) && (arr[end] <= pivot)) {
            swap(arr, start, end);
            pivotInd = start;
            start++;
            end--;
        }
        // scenario 2: need to move left pointer (pivot index) to the right if both left and right values are equal to pivot  
        else if ((arr[start] === pivot) && (arr[end] === pivot)) {
            pivotInd = start;
            start ++;
        }
        // scenario 3: need to move left pointer (pivot index) to the right if left value is less than pivot
        else if (arr[start] < pivot) {
            pivotInd = start;
            start ++;
        }
        // scenario 4: need to move right pointer to the left if right value is greater than pivot 
        else if (arr[end] > pivot) {
            end --;
        }
    }
    swap(arr,0,pivotInd);
    console.log("arr after pivot:", arr, "pivot", pivotInd);    
    return pivotInd;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    // if (arr.length === 0) return [];
    
    // console.log("initial arr:", arr);
    // let pivotIndex = pivot(arr);

    // let leftArr = arr.slice(0, pivotIndex);
    // console.log("leftArr", leftArr);
    // if (leftArr.length >= 2) {
    //     let left = quickSort(leftArr);
    //     console.log("left", left);
    // }
    
    // let rightArr = arr.slice(pivotIndex);
    // if (rightArr.length >= 2) {
    //     let right =  quickSort(rightArr);
    //     console.log("right", right);  
    }
}

module.exports =  {quickSort, pivot};

let a = quickSort([0, -10, 7, 4, -3]);
console.log(a);
// console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(quickSort([0, 0, 7, 4, -2, 3, 0, 2])); // [-10, 0, 4, 7]
// console.log(quickSort([0, -10, 7, 4, -3])); // [-10, 0, 4, 7]
// console.log(quickSort([1, 2, 3])); // [1, 2, 3]
// console.log(quickSort([]));

// let nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// let nums = [4, 3, 5, 43, 232, 4];

// quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34,
                //   35, 43, 67, 75, 232, 232, 453, 546, 4342]