/*
Description:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// My solution
function positiveSum(arr) {
    let sum=0;
    arr.forEach( x => x>0 ? sum+=x : sum+=0)
    return sum
  }