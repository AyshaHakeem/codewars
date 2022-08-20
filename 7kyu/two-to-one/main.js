/*DESCRIPTION:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
*/

//My Solution
function longest(s1, s2) {
    let arr = (s1+s2).split('').sort()
    let result = ''
    for(let char of arr){
        let nextChar = arr.filter(x=>x==char)[0]
        if(!result.includes(nextChar)){
            result += nextChar
        }
    } 
    return result
  }