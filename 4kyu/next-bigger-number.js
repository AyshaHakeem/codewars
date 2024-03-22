/*
DESCRIPTION:
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBigger(n) {
  let arr = [...String(n)].map(Number);
  let pivotIndex = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      pivotIndex = i;
      break;
    }
  }

  if (pivotIndex === -1) return -1;

  let swapIndex = -1;
  for (let i = pivotIndex + 1; i < arr.length; i++) {
    if (arr[i] > arr[pivotIndex]) {
      if (swapIndex === -1 || arr[i] < arr[swapIndex]) {
        swapIndex = i;
      }
    }
  }
  // Swap pivot and swap
  [arr[pivotIndex], arr[swapIndex]] = [arr[swapIndex], arr[pivotIndex]];

  let resultArray = arr
    .slice(0, pivotIndex + 1)
    .concat(arr.slice(pivotIndex + 1).sort((a, b) => a - b));

  return Number(resultArray.join(""));
}
