// Given an array of 1s and 0s which has all 1s first followed by all 0s, 
// write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:
// Time Complexity: O(log N)

// Examples:
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

function countZeroes(arr) {
    let leftInd=0;
    let rightInd=arr.length-1;
    if (arr[rightInd] === 1) return 0;
    if (arr[leftInd] === 0) return arr.length;
    
    while(leftInd <= rightInd) {
        let middleInd=Math.floor((rightInd+leftInd)/2);
        if ((arr[middleInd] === 1) && (arr[middleInd+1] === 0)) {
            return (arr.length-middleInd-1);
        } 
        else if ((arr[middleInd] === 1) && (arr[middleInd+1] !== 0)) {
            leftInd = middleInd+1;
        }
        else {
            rightInd = middleInd-1;
        }
    }
    return 0;
}

module.exports = countZeroes;
