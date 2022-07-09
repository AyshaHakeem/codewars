/*
DESCRIPTION:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
*/

// My solution
function digitize(n) {
  let arr = Array.from(String(n))
  return arr.map((x)=>x=Number(x)).reverse()
}