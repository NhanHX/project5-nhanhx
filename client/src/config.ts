// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'bmol3a9rjb'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`
//export const apiEndpoint = `https://omgwngn63k.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-vge4wb88fabpsvne.us.auth0.com',            // Auth0 domain
  clientId: 'D4oBoyuj4gQ6M7hODMKRiyOnPqYIjeTV',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
