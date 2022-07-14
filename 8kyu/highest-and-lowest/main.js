/*
Description:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"

*/

// My solution
function highAndLow(numbers){
    let numsArray = numbers.split(' ').map(x=>Number(x));
    return `${Math.max(...numsArray)} ${Math.min(...numsArray)}`
  }
  