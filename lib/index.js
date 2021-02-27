"use strict";
const { Octokit } = require("@octokit/rest");

/**
 * Make an reqest to GitHub repository and get the responce.
 * @param {Object} o - Function options
 * @param {string} o.token - GitHub account access token
 * @param {string} o.method - GitHub api request method like get, post, patch etc
 * @param {string} o.path - GitHub api request path
 * @param {string} o.body - GitHub api request form data to execute
 */
module.exports = async (o) => {
  if (typeof o !== "object") {
    throw new TypeError("options must be a object to req.get");
  }

  const octokit = new Octokit({ auth: o.token });

  const response = await octokit.request(`${o.method} ${o.path}`, o.body);

  if (response.total_count === 0) {
    throw new TypeError("options must be valid to req.get");
  }

  return response;
};
