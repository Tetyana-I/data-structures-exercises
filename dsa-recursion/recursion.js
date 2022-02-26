/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
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

function revString(str, left=0, right=str.length) {
  if (left >= right) return str;
  let temp;
  temp = str[right];
  str[right] = str[left];
  str[left] = temp;
  return revString(str, left+1, right-1);
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

function binarySearch(arr, val) {
  // let left = 0;
  // let right = arr.length-1;
  // while (left <= right) {
  //   let middle = Math.floor((left+right)/2);  
  //   if (arr[middle] === val) return middle;
  //   if (arr[middle] > val) {
  //     right = middle--;
  //   } else {
  //     left = middle++;
  //   }
  // }
  // return -1;
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