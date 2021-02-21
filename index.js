"use strict";

/**
 * Import repositories functions
 * @Function githubData - To make a github api request
 */
let { githubRequest } = require("./lib");

/**
 * Exports imported GitHub functions
 */
module.exports = {
  githubRequest,
};
