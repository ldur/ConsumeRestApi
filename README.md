# DI Address Helper Tech Case

## Mindset

1. I don't prioritize design or making it look good. I focus on making it work and then add test.
2. I don't use time on setting up environments variables for the API. Instead, the developer can just change the url in
   the code.

## Solution

1. Take advantage of Axios and Material UI to create a simple UI for navigating the available form field and conclude
   with a receipt in case success. Content of the receipt is key information regarding the address.
2. Added Cypress test for E2E testing.
3. Added unit thest for the API calls.

## Potentiol improvements

1. Add input delay as an optional
2. Add a loading spinner
3. Handle error if the API call fails

## Libraries used

1. Material UI: https://material-ui.com/ - for UI components
2. Axios: https://axios-http.com/ - Promise based HTTP client for the browser and node.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
