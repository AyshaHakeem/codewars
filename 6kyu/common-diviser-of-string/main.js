/*
DESCRIPTION:
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
*/

// check if string2 equals string1 sliced to string 2's length
//

const gcdOfStrings = (str1, str2) => {
  if (str1.slice(0, str2.length) != str2) return "";
  let result = ''
  let a = str1.length;
  let b = str2.length;
  //   let c = a;
  while (b) {
    let left = a % b 
    
    b = left
  }
};
