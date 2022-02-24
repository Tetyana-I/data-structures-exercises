// Write a function that is passed a string which can contain any text, 
// including different kinds of brackets: {} [] ().
// It should examine the string and decide if the string is “balanced” — 
// a balanced string is one where the different kinds of brackets are properly balanced, 
// such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.

// Examples of balanced strings:
// hello (no brackets)
// (hi) [there]
// (hi [there])
// (((hi)))

// Imbalanced:
// (hello (bracket left open at end)
// (nope] (wrong type closed)
// ((ok) [nope)] (closed out of order)

const Stack = require('./stack');

function balanced(str) {
    const s = new Stack();
    for (let char of str) {
        if ((char === '(') || (char === '{') || (char === '[')) {
           s.push(char); 
        } 
        if (char === ')') {
            if (s.isEmpty() || (s.peek() !== '(')) return false; 
            s.pop();
        } 
        if (char === '}') {
            if (s.isEmpty() || (s.peek() !== '{')) return false; 
            s.pop();
        }
        if (char === ']') {
            if (s.isEmpty() || (s.peek() !== '[')) return false; 
            s.pop();
        }        
    }
    
    if (s.isEmpty()) return true
    else return false;
}
