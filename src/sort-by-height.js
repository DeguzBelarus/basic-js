const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    throw new NotImplementedError('Not implemented');

  arr = arr.sort((prevHeight, nextHeight) => {
    if (prevHeight === -1 || nextHeight === -1) return 0;

    if (prevHeight < nextHeight) {
      return 1;
    }

    if (prevHeight > nextHeight) {
      return -1;
    }

    return 0;
  });

  console.log(arr);
  return arr;
}

module.exports = {
  sortByHeight,
};
