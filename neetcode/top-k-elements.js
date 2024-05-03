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
  // second attempt
  topKFrequent2(nums, k) {
    let map = new Map();
    nums.forEach((n) => map.set(n, (map.get(n) || 0) + 1));
    return [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .map((n) => n[0])
      .slice(0, k);
  }

  topKFrequent1(nums, k) {
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
