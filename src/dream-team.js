const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let teamNameArr = [];

  members.forEach((member) => {
    if (typeof member === "string") {
      let formattedString = "";

      for (let i = 0; i < member.length; i++) {
        if (member[i] !== " ") {
          formattedString += member[i];
        }
      }

      teamNameArr.push(formattedString[0].toUpperCase());
    }
  });

  if (!teamNameArr.length) return false;

  teamNameArr = teamNameArr.sort((prevLetter, nextLetter) => {
    if (prevLetter < nextLetter) {
      return -1;
    }

    if (prevLetter > nextLetter) {
      return 1;
    }

    return 0;
  });

  let teamName = "";

  teamNameArr.forEach((nameLetter) => (teamName += nameLetter));

  return teamName;
}

module.exports = {
  createDreamTeam,
};
