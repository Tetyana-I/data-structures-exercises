// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
// The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:
// Time Complexity: O(log N)

// Examples:
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

function findRotatedIndex(arr, num) {
    // 0. check if array is not empty, or not passed
    // 1. find pivot index
    // 2. search in two sorted subarrays (using binary search)

    function binarySearch(left, right, arr, num) {
        let middle;
        while(left <= right) {
            middle = Math.floor((left + right)/2);
            if (arr[middle] === num) {
                return middle;
            }
            else if (arr[middle] < num) 
            { 
                left = middle + 1;
            }
            else {
                right = middle - 1;
            };
        }
        return -1;
    }

    function pivotSearch(arr) {
        if(arr.length == 0 || arr == null) return -1;
        let left = 0;
        let right = arr.length-1;
        while (left < right) {
            let middle = Math.floor((left+right)/2);
            if (arr[middle] > arr[right]) {
                left = middle + 1; 
            }
            else { 
                right = middle; 
            } 
        } 
        let pivot = left;
        return pivot;
    }

    let indResult;
    let pivotInd = pivotSearch(arr);
    if (pivotInd === -1) return -1;
    
    // Sorted subarrays: 
    // 1) left = 0, right = pivot-1
    // 2) left = pivot, right = arr.length-1
    
    let leftInd = 0;
    let rightInd = pivotInd-1;
    if ((num <= arr[rightInd]) && (num >= arr[leftInd])) {
        indResult = binarySearch(leftInd, rightInd, arr, num);
    } else {
        leftInd = pivotInd;
        rightInd = arr.length - 1;
        indResult = binarySearch(leftInd, rightInd, arr, num);
    }
    return indResult;
}

module.exports = findRotatedIndex;


