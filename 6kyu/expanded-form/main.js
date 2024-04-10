/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/
// second attempt
function expandedForm(num) {
  return String(num)
    .split("")
    .reverse()
    .map((n, i) => n * Math.pow(10, i))
    .filter((n) => n !== 0)
    .reverse()
    .join(" + ");
}

function expandedForm(num) {
  let str = String(num),
    result = [],
    multiple;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      multiple = Number("1".padEnd(str.length - i, 0));
      result.push(Number(str[i]) * multiple);
    }
  }
  return result.join(" + ");
}
