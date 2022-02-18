// findFloor
// Write a function called findFloor which accepts a sorted array and a value x,
// and returns the floor of x in the array.
// The floor of x in an array is the largest element in the array which is smaller than or equal to x. 
// If the floor does not exist, return -1.

// Examples:
// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

// Constraints
// Time Complexity: O(log N)

function findFloor(arr, x) {
    if (arr.length === 0) return -1;
    let left = 0;
    let right = arr.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left+right)/2);
        if (arr[middle] === x) {
              return arr[middle];   
            }
        if (arr[middle] < x) {
            left = middle + 1;
            // if max value (arr[right]) in a new subarray <= x then return it
            if (arr[right] <= x) {
                return arr[right];
            }
        } else {
            right = middle - 1;
        } 
    }
    // in case if (right < left) and arr[right] is our result
    if ((right >= 0) && (arr[right] <= x)) {
       return arr[right];  
    }
    return -1;
}

module.exports = findFloor;
