"use strict";
const { Octokit } = require("@octokit/rest");

/**
 * Make an reqest to GitHub repository and get the responce.
 * @param {Object} o - Function options
 * @param {string} o.body - Request body
 * @param {string} o.token - GitHub account access token
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
