const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //   throw new NotImplementedError('Not implemented');
  let resultString = "";

  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  if (!repeatTimes) {
    repeatTimes = 1;
  }

  if (addition && !additionRepeatTimes) {
    additionRepeatTimes = 1;
  }

  if (!additionSeparator) {
    additionSeparator = `|${addition}|`;
   //  additionRepeatTimes -= 1;
  }

  if (!separator) {
    separator = "+";
  }

  for (let i = 1; i <= repeatTimes; i++) {
    resultString += str;

    if (i !== repeatTimes) {
      for (let ii = 1; ii <= additionRepeatTimes; ii++) {
        if (ii !== additionRepeatTimes) {
          resultString += addition + additionSeparator;
        } else {
          resultString += addition;
        }
      }

      resultString += separator;
    } else {
      for (let ii = 1; ii <= additionRepeatTimes; ii++) {
        if (ii !== additionRepeatTimes) {
          resultString += addition + additionSeparator;
        } else {
          resultString += addition;
        }
      }
    }
  }

  let compare =
    "REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION";

  if (compare === resultString) {
    console.log("true");
  } else {
    console.log("false");
    console.log(resultString);
    console.log(compare);
    console.log(
      resultString.length,
      compare.length,
      resultString.length - compare.length
    );
  }

  return resultString;
}

module.exports = {
  repeater,
};
