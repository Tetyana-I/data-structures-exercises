// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
// The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:
// Time Complexity: O(log N)

// Examples:
// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0


function findRotationCount(arr) {
    if(arr.length == 0 || arr == null) return -1;
    // pivot search
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
    // pivot = left 
    return left;
}

module.exports = findRotationCount;


