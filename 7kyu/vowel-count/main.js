/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// My solution

function getCount(str) {
    let count = 0;
    for (let char of str){
      switch (char){
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
          count++;
          break;
      }
    }
    return count
}