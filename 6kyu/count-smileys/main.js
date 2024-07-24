function countSmileys(arr) {
  const smileyPattern = /^[:;][-~]?[)D]$/;
  return arr.reduce(
    (count, face) => (smileyPattern.test(face) ? count + 1 : count),
    0
  );
}
