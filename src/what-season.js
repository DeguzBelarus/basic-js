const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  throw new NotImplementedError("Not implemented");

  if (!date) return "Unable to determine the time of year!";
  //   if (arguments[0] === "2022-10-13T13:44:23.413Z")
  //     throw new Error("Invalid date!");
  //   console.log(arguments[0]);

  //   let stringDate = date.toString();
  //   console.log(stringDate);
  //   stringDate = new Symbol(stringDate);
  //   console.log(stringDate[toStringTag]);

  //   if (Object.prototype.toString.call(date) === "[object Date]") {
  //     console.log(date.getTime());
  //   }

  console.log(typeof date);
  console.log(Object.getOwnPropertyNames(date));
  if (Number.isNaN(date.getMonth())) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  console.log(month);

  switch (true) {
    case month === 0:
      console.log("winter");
      return "winter";
    case month === 1:
      console.log("winter");
      return "winter";
    case month === 2:
      console.log("spring");
      return "spring";
    case month === 3:
      console.log("spring");
      return "spring";
    case month === 4:
      console.log("spring");
      return "spring";
    case month === 5:
      console.log("summer");
      return "summer";
    case month === 6:
      console.log("summer");
      return "summer";
    case month === 7:
      console.log("summer");
      return "summer";
    case month === 8:
      console.log("autumn");
      return "autumn";
    case month === 9:
      console.log("autumn");
      return "autumn";
    case month === 10:
      console.log("autumn");
      return "autumn";
    case month === 11:
      console.log("winter");
      return "winter";
  }
}

module.exports = {
  getSeason,
};
