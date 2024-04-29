/*
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
*/

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let obj = {};
    let result = {};
    nums.forEach((n) => (obj[n] ? (obj[n] += 1) : (obj[n] = 1)));
    for (let n in obj) {
      result[obj[n]]
        ? result[obj[n]].push(Number(n))
        : (result[obj[n]] = [Number(n)]);
    }
    return Object.values(result).flat().slice(-k);
  }
}
