/*
DESCRIPTION:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
Note: your solution must not modify the input array.
*/

function score(dice) {
  const occurrence = dice.reduce((obj, cur) => {
    obj[cur] = (obj[cur] || 0) + 1;
    return obj;
  }, {});

  const scoring = [
    { num: 1, sumValue: 1000, individualValue: 100 },
    { num: 2, sumValue: 200 },
    { num: 3, sumValue: 300 },
    { num: 4, sumValue: 400 },
    { num: 5, sumValue: 500, individualValue: 50 },
    { num: 6, sumValue: 600 },
  ];

  return scoring.reduce((total, { num, sumValue, individualValue = 0 }) => {
    const occ = occurrence[num] || 0;
    if (occ >= 3) {
      total += Math.floor(occ / 3) * sumValue;
    }
    if (individualValue !== 0) {
      total += (occ % 3) * individualValue;
    }
    return total;
  }, 0);
}
