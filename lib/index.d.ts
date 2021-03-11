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

// request
(async () => {
  console.log(await githubRequest(options)); // returns <response_data>
})();

// examples of GitHub api request
// GET /user/repos - List repositories for the authenticated user
// POST /user/repos - Create a repository for the authenticated user
// PATCH /repos/{owner}/{repo} - Update a repository
// DELETE /repos/{owner}/{repo} - Delete a repository
// GET /repos/{owner}/{repo}/issues - List repository issues
// POST /repos/{owner}/{repo}/issues - Create an issue
// PATCH /repos/{owner}/{repo}/issues/{issue_number} - Update an issue
// GET /repos/{owner}/{repo}/issues/{issue_number}/comments -Issue comments
// POST /repos/{owner}/{repo}/issues/{issue_number}/comments -Create an comment
// PATCH /repos/{owner}/{repo}/issues/comments/{comment_id} -Update an comment
// ETC as per GitHub REST API docs link below
```
*/

declare function githubRequest(options: Object): Promise<Object | undefined>;

export = githubRequest;
