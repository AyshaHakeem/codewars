/*
DESCRIPTION:
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

const scramble = (str1, str2) => {
  const count = (string) => {
    const countObj = {};
    for (let char of string) {
      countObj[char] = (countObj[char] || 0) + 1;
    }
    return countObj;
  };
  const count1 = count(str1);
  const count2 = count(str2);

  for (let char in count2) {
    if (!(count2[char] <= count1[char])) {
      return false;
    }
  }
  return true;
};
