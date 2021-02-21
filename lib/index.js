"use strict";
let q = require("./request");

module.exports = {
  /**
   * @Function githubRequest - To make a github api request.
   * @param {Object} o - function options
   */
  githubRequest: (o) => {
    if (typeof o !== "object") {
      throw new TypeError("options must be a object to req.get");
    }

    q.query(o, (e, r) => {
      if (e) {
        throw new TypeError(e);
      }

      return r;
    });
  },
};
