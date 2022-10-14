const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _str: [],
  getLength() {
    return this._str.length;
  },
  addLink(value) {
    this._str.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (Number.isNaN(Number(position)) || !this._str[position - 1]) {
      this._str = [];
      throw new Error("You can't remove incorrect link!");
    }

    this._str = this._str.filter((chain, index) => index !== position - 1);
    return this;
  },
  reverseChain() {
    this._str = this._str.reverse();
    return this;
  },
  finishChain() {
    let chainStr = "";

    for (let i = 0; i < this._str.length; i++) {
      chainStr += this._str[i] + "~~";
    }

    chainStr = chainStr.slice(0, chainStr.length - 2);

    console.log(chainStr);

    const compare = "( 3rd )~~( function () { } )";

    if (chainStr === compare) {
      console.log("true");
    } else {
      console.log("false");
    }

    return chainStr;
  },
};

module.exports = {
  chainMaker,
};
