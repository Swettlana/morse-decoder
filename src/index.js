const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  function deleteZeroInStart(str) {
    let indexFirstOne = str.indexOf("1");
    return str.slice(indexFirstOne);
  }

  function getLetterFromCode(code) {
    let key = code
      .split("")
      .map((el, ind, arr) => (ind % 2 === 0 ? arr[ind] + arr[ind + 1] : ""))
      .filter((el) => el !== "")
      .map((el) => (el == 10 ? "." : "-"))
      .join("");
    return MORSE_TABLE[key];
  }

  function divideByTens(word) {
    const arrayWithTens = [];
    for (let i = 0; i < word.length; i += 10) {
      const tens = [];
      for (let j = 0; j < 10; j++) {
        tens.push(word[i + j]);
      }
      arrayWithTens.push(tens.join(""));
    }
    return arrayWithTens;
  }

  return (arrayOfWords = expr
    .split("**********")
    .map((word) => divideByTens(word))
    .map((arrayOfLetters) =>
      arrayOfLetters
        .map((letter) => deleteZeroInStart(letter))
        .map((el) => getLetterFromCode(el))
        .join("")
    )
    .join(" "));
}

module.exports = {
  decode,
};
