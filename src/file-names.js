const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) return [];
  let nameLevel = 0;
  let scopeLevel = 0;
  let modifiedNames = [];

  names.forEach((name, index) => {
    const scopeArr = name.split("(");
    scopeLevel = scopeArr.length - 1;

    if (scopeLevel) {
      nameLevel = Number(scopeArr[1].split(")")[0]);
    }

    while (modifiedNames.find((modifiedName) => modifiedName === name)) {
      if (scopeLevel < 2) {
        scopeLevel++;

        if (scopeLevel !== 2) {
          nameLevel++;
        }

        const appendix = `(${nameLevel})`;
        name = name.split("(")[0] + appendix.repeat(scopeLevel);
      } else {
        scopeLevel = 1;
        nameLevel++;

        const appendix = `(${nameLevel})`;
        name = name.split("(")[0] + appendix.repeat(scopeLevel);
      }
    }

    modifiedNames.push(name);

    nameLevel = 0;
    scopeLevel = 0;
  });

  return modifiedNames;
}

module.exports = {
  renameFiles,
};
