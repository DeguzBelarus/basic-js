const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    console.log("false");
    return false;
  }

  if (Number.isNaN(Number(sampleActivity))) {
    console.log("false");
    return false;
  }

  sampleActivity = Number(sampleActivity);

  console.log(sampleActivity);

  if (!sampleActivity || sampleActivity > 15 || sampleActivity < 0) {
    console.log("false");
    return false;
  }

  const t = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD)
  );

  console.log(t);
  return t;
}

module.exports = {
  dateSample,
};
