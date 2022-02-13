// Given a sorted array and a number, write a function called sortedFrequency
// that counts the occurrences of the number in the array

// Constraints:
// Time Complexity: O(log N)

// Examples:
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

function sortedFrequency(arr, num) {
    let leftInd = 0;
    let rightInd = arr.length-1;
    let middleInd;
    
    function countSequence() {
        let count = 1;
        for (let i = middleInd-1; i >= leftInd; i--) {
            if (arr[i] === num) count++;
            else break;
        }
        for (let i = middleInd + 1; i <= rightInd; i++ ) {
            if (arr[i] === num) count++;
            else break;
        } 
        return count;
    }

    while (leftInd <= rightInd) {
        middleInd = Math.floor((rightInd + leftInd)/2);
        let val = arr[middleInd];
        if (val === num) {
            count = countSequence();
            return count;
        } else if (val < num) {
            leftInd = middleInd + 1;
        } else {
            rightInd = middleInd - 1;
        }        
    }
    return -1;
}

module.exports = sortedFrequency;
