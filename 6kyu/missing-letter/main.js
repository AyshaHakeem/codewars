const findMissingLetter = (array) => {
  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const letters =
    array[0] === array[0].toUpperCase()
      ? alphabets
          : alphabets.map((x) => x.toLowerCase());
    


  const first = letters.indexOf(array[0]);
  for (let i = 0; i <= array.length; i++) {
    if (letters[first + i] !== array[i]) {
      return letters[first + i]
    }
  }
};
