# DI Address Helper Tech Case

## Task requirements

1. Implement an address check UI where users can validate their addresses.
2. Search the address using the API provided by DI.
3. Search for multiple addresses.
4. Show a confirmation in the UI.

## Mindset

1. I don't prioritize design or making it look good. I focus on making it work and then add e2etest.
2. I don't use time on setting up environments variables for the API. Instead, the developer can just change the url in
   the code.
3. There is noe unit test, but I have added Cypress test for E2E testing. There no need for unit test when the
   application is so simple.

## Solution

1. Take advantage of Axios and Material UI to create a simple UI. User is shown the initial UI with a search field and a
   add search button when opening the page.
2. When searching address the available information about the address will be show to the right next to the
   corresponding search fields.
3. Pressing the "Add search" button will add new search field and the functionality to remove search fields as well as
   long as there is more than 1 search field.

## Potential improvements

1. Add input delay as an optional
2. Add a loading spinner
3. Handle error if the API call fails
4. Add copy search field functionality
5. Add limit to the number of search fields
6. Fix MUI warnings in console

## Libraries used

1. Material UI: https://material-ui.com/ - for UI components
2. Axios: https://axios-http.com/ - Promise based HTTP client.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm cypress:open`

Opens the Cypress test runner in the interactive watch mode.

### `npm cypress:run`

Runs the Cypress test runner in the headless mode.
