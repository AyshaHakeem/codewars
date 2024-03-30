/*
DESCRIPTION:
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3
The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/

function findNb(m) {
  let result = 0;
  for (let i = 1; i < m; i++) {
    let n = Math.pow(i, 3);
    if (result + n < m) {
      result += n;
    } else if (result + n == m) {
      return i;
    } else {
      break;
    }
  }
  return -1;
}
