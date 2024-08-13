/*
Longest Consecutive Sequence
Solved 
Given an array of integers nums, return the length of the longest consecutive sequence of elements.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [2,20,4,10,3,4,5]

Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (nums.length == 0) return 0;

    const numbers = new Set(nums);
    let maxLength = 0;

    numbers.forEach((n) => {
      let currentStreak = 0;

      if (!numbers.has(n - 1)) {
        currentStreak = 1;
      }

      while (numbers.has(n + currentStreak)) {
        currentStreak += 1;
      }

      maxLength = Math.max(maxLength, currentStreak);
    });

    return maxLength;
  }
  /*
   * a number with no left neighnour is the start of a sequence
   * inceremnt by 1 and build the sequence
   *
   */
}
