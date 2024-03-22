/*
DESCRIPTION:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index. Also this function should evaluate the same when instantiated as an object using the new keyword.

For example:

evenOrOdd(2); //'Even'
evenOrOdd[2]; //'Even'
new evenOrOdd(2); //'Even'
new evenOrOdd[2]; //'Even'
evenOrOdd(7); //'Odd'
evenOrOdd[7]; //'Odd'
new evenOrOdd(7); //'Odd'
new evenOrOdd[7]; //'Odd'
*/

function evenOrOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}
