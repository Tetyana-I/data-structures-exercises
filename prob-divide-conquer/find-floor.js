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
    console.log(arr, "val=", x);
    while (left <= right) {
        middle = Math.floor((left+right)/2);
        console.log("left:", left, "right:", right, "middle:", middle);
        if (arr[middle] <= x) {
              console.log("result", arr[middle]);  
              return arr[middle];   
            }
        if (arr[middle] < x) {
            left = middle + 1;
            if (arr[right] <= x) {
                console.log("right result", arr[right]);
                return arr[right];
            }
        } else {
            right = middle - 1;
        }        
    }
    return -1;
}

module.exports = findFloor;

// findFloor([1,2,8,10,10,12,19], 9); // 8
findFloor([1,2,8,10,10,12,19], 20); // 19
// findFloor([1,2,8,10,10,12,19], 0); // -1