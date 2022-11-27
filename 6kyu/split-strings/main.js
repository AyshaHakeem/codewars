/*
DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

// My Solution:

function solution(str){
    let arr = [],
        i=0
    if (str.length%2!=0) str+='_'
    while(i<str.length){
        arr.push(str.slice(i,i+2))
        i+=2
    }
    return arr
}
    

