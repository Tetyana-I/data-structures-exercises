/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (nums.length === 0) return 0;
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i+1);
}
// ??? how to handle a case if an empty array is passed 


/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, max=0) {
  if (i === words.length) return max;
  if (words[i].length > max) max = words[i].length;
  return longest(words, i+1, max);
}


/** everyOther: return a string with every other letter. */

function everyOther(str, resStr="", i=0) {
  if (i >= str.length) return resStr;
  resStr = resStr + str[i];
  return everyOther(str, resStr, i=i+2);
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left=0, right=str.length-1, polindrom = true) {
  if (left >= right) return polindrom;
  if (str[left] !== str[right]) polindrom = false;
  return isPalindrome(str, left+1, right-1, polindrom);
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reverse="", i=str.length-1) {
  if (reverse.length === str.length) return reverse;
  reverse = reverse + str.slice(i,i+1);
  return revString(str, reverse, i=i-1); 
}


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  let curObj = obj;
  for (let key of Object.keys(curObj)) {
    if (typeof(curObj[key]) === "object") {
      let nestedObj = curObj[key];
      gatherStrings(nestedObj, arr);
    } else {
      if (typeof(curObj[key]) === "string") {
        arr.push(curObj[key]);
      }
    }
  }
  return arr;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length-1) {
  if (left > right) return -1;
  let middle = Math.floor((left+right)/2);
  if (arr[middle] === val) return middle;
  if (arr[middle] > val) return binarySearch(arr, val, left, right=middle-1);
  if (arr[middle] < val) return binarySearch(arr, val, left=middle+1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
