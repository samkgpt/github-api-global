## GitHub Api's

![npm](https://img.shields.io/npm/v/github-api-global) [![Support Node of LTS](https://img.shields.io/badge/node-latest-brightgreen.svg)](https://nodejs.org/) [![dependencies Status](https://status.david-dm.org/gh/request/request.svg)](https://david-dm.org/request/request)


To create calls to get the data you need by using [GitHub Rest API][github-docs]


## Installation

```bash
$ npm install github-api-global
```

## Usage

```javascript
var { githubRequest } = require("github-api-global");
```

## GitHub Rest Api Request

```javascript
// To create calls to get the data you need by using GitHub Rest Api
const options = {
  token: "1e3ed294c3f7tce7btdb743f9135656", // To get token see link below
  method: "get", // As per request
  path: "/user/repos", // As per request
  body: {
    name: "name",
    description: "description",
    // Add more body params from GitHub Api docs as per request method describe
  },
};

console.log( githubRequest(options) ); // returns <response_data>

// More examples of GitHub api request - {}
// GET /user/repos - List repositories for the authenticated user
// POST /user/repos - Create a repository for the authenticated user
// PATCH /repos/{owner}/{repo} - Update a repository
// DELETE /repos/{owner}/{repo} - Delete a repository
// GET /repos/{owner}/{repo}/issues - List repository issues
// PATCH /repos/{owner}/{repo}/issues/{issue_number} - Update an issue
// Etc as per GitHub REST API docs link below
```

For more GetHub API method, path and body options flow [GitHub Rest Api Docs][github-docs].

To [authenticate][github-oauth2] with GitHub, set the [`token`][github-token] option.

## License

[MIT license](http://opensource.org/licenses/MIT).

## Copyright

Copyright &copy; 2021. S.Gupta

[github-docs]: https://docs.github.com/en/rest/reference/repos
[github-api]: https://developer.github.com/v3/
[github-token]: https://github.com/settings/tokens/new
[github-oauth2]: https://developer.github.com/v3/#oauth2-token-sent-in-a-header
