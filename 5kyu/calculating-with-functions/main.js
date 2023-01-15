/*
DESCRIPTION:
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

const zero = (calc) => calc ? calc(0) : 0
const one = (calc) => calc ? calc(1) : 1
const two = (calc) => calc ? calc(2) : 2 
const three = calc => calc ? calc(3) : 3
const four = calc => calc ? calc(4) : 4
const five = calc => calc ? calc(5) : 5
const six = calc => calc ? calc(6) : 6
const seven  = calc => calc ? calc(7) : 7
const eight = calc => calc ? calc(8) : 8
const nine = calc => calc ? calc(9) : 9

const plus  = n => n1 => n + n1
const minus = n => n1 => n1 - n
const times = n => n1 => n*n1
const dividedBy = n => n1 => Math.trunc(n1/n)


