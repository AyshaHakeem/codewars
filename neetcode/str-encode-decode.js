/*
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
*/

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.map((s) => `${s.length};${s}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let j = str.indexOf(";", i);
      let length = Number(str.slice(i, j)) + 1;
      result.push(str.slice(j + 1, j + length));
      i = j + length;
    }
    return result;
  }
}
