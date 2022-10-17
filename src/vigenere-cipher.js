const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  isDirectType = true;
  vigenereQuadrato = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  constructor(isDirect) {
    if (arguments.length) {
      this.isDirectType = isDirect;
    }
  }

  encrypt(str, key) {
    if (arguments.length < 2) {
      throw new Error("Incorrect arguments!");
    }

    if (typeof arguments[0] !== "string" || typeof arguments[1] !== "string") {
      throw new Error("Incorrect arguments!");
    }

    let strArray = [];

    for (let letter of str) {
      if (letter !== " ") {
        strArray.push(letter.toUpperCase());
      }
    }

    let strIndexesArray = [];

    strArray.forEach((letter) => {
      strIndexesArray.push(
        this.vigenereQuadrato.findIndex(
          (quadratoLetter) => quadratoLetter === letter
        )
      );
    });

    if (key.length < strIndexesArray.length) {
      key = key += key.repeat(Math.round(strIndexesArray.length / key.length));
    }

    key = key.slice(0, strIndexesArray.length);

    let keyArray = [];

    for (let letter of key) {
      if (letter !== " ") {
        keyArray.push(letter.toUpperCase());
      }
    }

    let keyIndexesArray = [];

    keyArray.forEach((letter) => {
      keyIndexesArray.push(
        this.vigenereQuadrato.findIndex(
          (quadratoLetter) => quadratoLetter === letter
        )
      );
    });

    let cryptedStrIndexesArray = [];

    for (let i = 0; i < strIndexesArray.length; i++) {
      const cryptedLetterIndex = (strIndexesArray[i] + keyIndexesArray[i]) % 26;

      if (strIndexesArray[i] < 0) {
        cryptedStrIndexesArray.push(strIndexesArray[i]);
      } else {
        cryptedStrIndexesArray.push(cryptedLetterIndex);
      }
    }

    let cryptedStrArray = [];

    cryptedStrIndexesArray.forEach((cryptedIndex) => {
      cryptedStrArray.push(this.vigenereQuadrato[cryptedIndex]);
    });

    let cryptedText = "";

    cryptedStrArray.forEach((letter) => (cryptedText += letter));

    let resultArray = [];

    for (
      let index = 0, cryptedIndex = 0;
      index < str.length;
      index++, cryptedIndex++
    ) {
      if (str[index] === " ") {
        cryptedIndex--;
        resultArray.push(" ");
      } else if (cryptedStrIndexesArray[cryptedIndex] < 0) {
        resultArray.push(str[index].toUpperCase());
      } else {
        resultArray.push(cryptedStrArray[cryptedIndex]);
      }
    }

    if (!this.isDirectType) {
      resultArray = resultArray.reverse();
    }

    str = "";

    resultArray.forEach((letter) => {
      str += letter;
    });

    console.log(str);
    return str;

    //  console.log(strIndexesArray);
    // console.log(keyIndexesArray);
    // console.log(cryptedStrIndexesArray);
    //  console.log(cryptedStrArray);
    //  console.log(cryptedText);
  }
  decrypt(str, key) {
    if (arguments.length < 2) {
      throw new Error("Incorrect arguments!");
    }

    if (typeof arguments[0] !== "string" || typeof arguments[1] !== "string") {
      throw new Error("Incorrect arguments!");
    }

    let strArray = [];

    for (let letter of str) {
      if (letter !== " ") {
        strArray.push(letter.toUpperCase());
      }
    }

    let strIndexesArray = [];

    strArray.forEach((letter) => {
      strIndexesArray.push(
        this.vigenereQuadrato.findIndex(
          (quadratoLetter) => quadratoLetter === letter
        )
      );
    });

    if (key.length < strIndexesArray.length) {
      key = key += key.repeat(Math.round(strIndexesArray.length / key.length));
    }

    key = key.slice(0, strIndexesArray.length);

    let keyArray = [];

    for (let letter of key) {
      if (letter !== " ") {
        keyArray.push(letter.toUpperCase());
      }
    }

    let keyIndexesArray = [];

    keyArray.forEach((letter) => {
      keyIndexesArray.push(
        this.vigenereQuadrato.findIndex(
          (quadratoLetter) => quadratoLetter === letter
        )
      );
    });

    let decryptedStrIndexesArray = [];

    for (let i = 0; i < strIndexesArray.length; i++) {
      let cryptedLetterIndex = strIndexesArray[i] - keyIndexesArray[i];
      if (cryptedLetterIndex < 0) {
        cryptedLetterIndex += 26;
      }
      cryptedLetterIndex = cryptedLetterIndex % 26;

      if (strIndexesArray[i] < 0) {
        decryptedStrIndexesArray.push(strIndexesArray[i]);
      } else {
        decryptedStrIndexesArray.push(cryptedLetterIndex);
      }
    }

    let decryptedStrArray = [];

    decryptedStrIndexesArray.forEach((cryptedIndex) => {
      decryptedStrArray.push(this.vigenereQuadrato[cryptedIndex]);
    });

    let decryptedText = "";

    decryptedStrArray.forEach((letter) => (decryptedText += letter));

    let resultArray = [];

    for (
      let index = 0, cryptedIndex = 0;
      index < str.length;
      index++, cryptedIndex++
    ) {
      if (str[index] === " ") {
        cryptedIndex--;
        resultArray.push(" ");
      } else if (decryptedStrIndexesArray[cryptedIndex] < 0) {
        resultArray.push(str[index].toUpperCase());
      } else {
        resultArray.push(decryptedStrArray[cryptedIndex]);
      }
    }

    if (!this.isDirectType) {
      resultArray = resultArray.reverse();
    }

    str = "";

    resultArray.forEach((letter) => {
      str += letter;
    });

    console.log(str);
    return str;

    //  console.log(strIndexesArray);
    //  console.log(keyIndexesArray);
    //  console.log(cryptedStrIndexesArray);
    //  console.log(decryptedStrArray);
    //   console.log(decryptedText);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
