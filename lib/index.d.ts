/**
To create calls to get the data you need by using GitHub Rest Api.
@param token - GitHub user access token.
@param method - Request method as per path request.
@param path - As per request by GitHub api docs.
@param body - Request  call with body params.
@returns The responce as per request be object.
@example
```
// usage
var githubRequest = require("github-api-global");
const options = {
  token: "1e3ed294c3f7tce7btdb743f9135656", // To get token see link below
  method: "get", // As per request
  path: "/repos/{owner}/{repo}/issues", // As per request, owner or user
  body: {
    name: "name",
    description: "description",
    state: "open",
    labels: ["bug", "dev"],
    // Add more body params from GitHub Api docs as per request method describe
  },
};

(async () => {
  console.log(await githubRequest(options)); // returns <response_data>
})();
```
*/

declare function githubRequest(options: Object): Promise<Object | undefined>;

export = githubRequest;
