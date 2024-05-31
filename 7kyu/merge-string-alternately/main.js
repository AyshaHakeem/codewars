/*
LeetCode
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

*/

// first 
const mergeAlternately = (word1, word2) => {
    let one = word1.split('')
    let two = word2.split('')
    for(let i=0; i<one.length; i+=2){
        if(one[i] && two.length>0){
            one.splice(i+1,0,two.shift())
        }
    }
    return [...one, ...two].join('')
};

// second
const mergeAlternate = (word1, word2) => {
  const result = [];
  const maxLength = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      result.push(word1[i]);
    }
    if (i < word2.length) {
      result.push(word2[i]);
    }
  }
  return result.join("");
};