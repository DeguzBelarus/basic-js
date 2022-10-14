const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (Array.isArray(arr) && !arr.length) return [];

  const discardPreviousCommand = "--discard-prev";
  const discardNextCommand = "--discard-next";
  const doublePrevCommand = "--double-prev";
  const doubleNextCommand = "--double-next";

  let resultArray = [];
  let skippedCommands = 0;
  let isDiscardNext = false;
  let isDiscardPrevious = false;
  let isDoubleNext = false;
  let isDoublePrev = false;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== discardPreviousCommand &&
      arr[i] !== discardNextCommand &&
      arr[i] !== doublePrevCommand &&
      arr[i] !== doubleNextCommand
    ) {
      if (!isDiscardNext) {
        if (!isDoubleNext) {
          resultArray.push(arr[i]);
          isDiscardPrevious = false;
          isDoublePrev = false;
        } else {
          resultArray.push(arr[i]);
          resultArray.push(arr[i]);
          isDoubleNext = false;
          isDiscardPrevious = false;
        }
      } else {
        isDiscardNext = false;
      }
    } else if (arr[i] === discardPreviousCommand) {
      if (isDiscardPrevious) {
        isDiscardPrevious = false;
      } else {
        resultArray = resultArray.filter((element, index) => {
          if (index !== i - 1 - skippedCommands) {
            return element;
          }
        });
      }

      skippedCommands += 1;
    } else if (arr[i] === discardNextCommand) {
      isDiscardNext = true;
      isDiscardPrevious = true;

      skippedCommands += 1;
    } else if (arr[i] === doublePrevCommand) {
      if (isDoublePrev) {
        isDoublePrev = false;

        if (resultArray[i - 1 - skippedCommands]) {
          resultArray.push(resultArray[i - 1 - skippedCommands]);
        }
      } else {
        if (resultArray[i - 1 - skippedCommands]) {
          resultArray.push(resultArray[i - 1 - skippedCommands]);
          resultArray.push(resultArray[i - 1 - skippedCommands]);
        }
      }

      skippedCommands += 1;
    } else if (arr[i] === doubleNextCommand) {
      isDoubleNext = true;
      isDoublePrev = true;

      skippedCommands += 1;
    }
  }

  const compare = [1, 2, 3, 1337, 4, 5];

  if (JSON.stringify(compare) === JSON.stringify(resultArray)) {
    console.log("true");
  } else {
    console.log("false");
  }

  console.log(resultArray);
  return resultArray;
}

module.exports = {
  transform,
};
