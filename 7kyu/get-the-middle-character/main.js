/*
Description:
DESCRIPTION:
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"
*/

// My solution

function getMiddle(s){
  let result
  let middelIndex = Math.floor(s.length/2)
  s.length%2 != 0 ?  result = s[middelIndex] : result = s[middelIndex-1 ] + s[middelIndex] 
  return result
}