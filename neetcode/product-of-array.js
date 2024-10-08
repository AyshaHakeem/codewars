/*
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in  O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */

  productExceptSelf02(nums) {
    let product = 1;
    let result = [];

    // calculate product to left of an element
    for (let i = 0; i < nums.length; i++) {
      result.push(product);
      product *= nums[i];
    }

    // multiply left product with right product
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= product;
      product *= nums[i];
    }

    return result;
  }

  productExceptSelf01(nums) {
    return nums.map((n, index) => {
      let product = 1;
      for (let i = 0; i < nums.length; i++) {
        if (i !== index) product *= nums[i];
      }
      return product;
    });
  }
}
