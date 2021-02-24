"use strict";
var http = require("https");

module.exports = {
  /**
   * Make an reqest to GitHub repository and get the responce.
   * @param {Object} o - Function options
   * @param {string} t - Request method type like get, post, patch etc
   * @param {string} o.token - GitHub account access token
   */

  query: (o) => {
    let s = "";

    const p = o.body;
    if (p) {
      for (var key of Object.keys(p)) {
        if (Array.isArray(p[key])) {
          s += `"${key}": ${JSON.stringify(p[key])},`;
        } else {
          s += `"${key}": "${p[key]}",`;
        }
      }
    }

    var options = {
      method: o.method,
      hostname: "api.github.com",
      port: null,
      path: `${o.path}?access_token=${o.token}`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    var req = http.request(options, (res) => {
      var chunks = [];

      res.on("data", (chunk) => {
        chunks.push(chunk);
      });

      res.on("end", () => {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.write(`{${s.slice(0, -1)}}`);
    req.end();
  },
};
