"use strict";
let q = require("./request");

module.exports = {
  /**
   * @Function listRepo - List all repository from an GitHub.
   * @param {Object} o - function options
   * @param {string} o.owner - GitHub user id
   * @param {string} o.repo - GitHub user repository
   */
  githubData: (o) => {
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
