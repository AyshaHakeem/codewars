function towerBuilder(nFloors) {
  let result = [];
  for (let i = 0; i < nFloors; i++) {
    let string =
      " ".repeat(i) + "*".repeat(nFloors * 2 - 1 - i * 2) + " ".repeat(i);
    result.push(string);
  }
  return result.reverse();
}
