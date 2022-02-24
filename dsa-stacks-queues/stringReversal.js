// String Reversal
// Write a function that reverses a string by handling one letter at a time. 
// You cannot use an arrays, nor can you use any string-reversal built-in method.

const Stack = require('./stack');

function reverse(str) {
    const stackStr = new Stack();
    for (char of str) {
        stackStr.push(char);
    }
    let reversed = "";
    if (!stackStr.isEmpty()) {
        while (stackStr.size > 0) {
            reversed = reversed + stackStr.pop();
        }
    }
    return reversed;
  }
