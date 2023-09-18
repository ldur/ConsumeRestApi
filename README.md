# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Mindset

1. I dont prirorites design or making it look good. I focus on making it work and then make it look good.
2. I dont use time on setting up environments variables for the API. Instead the developer can just change the url in
   the code.
3.

## LøsningsBeskrivelse

1. Lekt med DI Address Helper V2 i postman for å finne ut hvordan den fungerer.
2. Ta i bruk axios og material UI for å lage en enkel UI som kan ta imot en adresse og returnere en liste med gatenavne.
   Den informasjonen brukes videre til å hente gate nummer for valgt gate.
3.

## Potentiol improvements

1. Add input delay as a optional
2. Add a loading spinner
3. Add a error message if the API call fails

## Libraries used

1. Material UI: https://material-ui.com/ - for UI components
2. Axios: https://axios-http.com/ - Promise based HTTP client for the browser and node.js
