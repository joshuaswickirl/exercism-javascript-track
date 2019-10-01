const checkChar = (char, usedLetters) => /[a-z]/.test(char) ? usedLetters.add(char) : null;

export const isPangram = (sentence) => {
  let usedLetters = new Set();
  [...sentence.toLowerCase()].forEach( char => checkChar(char,usedLetters) );
  return usedLetters.size === 26;
}
