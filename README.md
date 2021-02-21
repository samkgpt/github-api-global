## GitHub Api's

![npm](https://img.shields.io/npm/v/github-api-global) [![Support Node of LTS](https://img.shields.io/badge/node-latest-brightgreen.svg)](https://nodejs.org/) [![dependencies Status](https://status.david-dm.org/gh/request/request.svg)](https://david-dm.org/request/request)

```bash
To make a request to github by using gitHub api
```

## Installation

```bash
$ npm install github-api-global
```

## Usage

```javascript
var { githubData } = require("github-api-global");
```

## GitHub Api Examples

```javascript
// List all issues from a repository
const options = {
  token: "1e3ed294c3f7tce7btdcdg18t88d98b743f9ac48t135656",
  method: "get", // As per request
  path: "/user/repos", // As per request, Floww gitHub docs for path below
  // You can add as much body param as per gitHub docs
  body: {
    name: "",
    description: "",
  },
};
console.log(githubData(options)); // returns <data>
```

For more gethub api url pat and body options flow [github docs][github-docs].

To [authenticate][github-oauth2] with GitHub, set the [`token`][github-token] option.

## License

[MIT license](http://opensource.org/licenses/MIT).

## Copyright

Copyright &copy; 2021. S.Gupta.

[github-docs]: https://docs.github.com/en/rest/reference/repos
[github-api]: https://developer.github.com/v3/
[github-token]: https://github.com/settings/tokens/new
[github-oauth2]: https://developer.github.com/v3/#oauth2-token-sent-in-a-header
[github-user-agent]: https://developer.github.com/v3/#user-agent-required
[github-rate-limit]: https://developer.github.com/v3/rate_limit/
