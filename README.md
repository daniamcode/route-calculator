# Frontend Technical Test
New feature request! Create a route cost calculator. This new feature should allow the user to:
1. Introduce the distance
2. Introduce the €/km
3. Calculate the total cost of the route
Sounds simple right? 2 inputs and the work is done... Yes, but let’s complicate it a little bit. Let’s add some new requirements:
4. In addition to the ability to introduce the distance manually, adding another option to calculate it from the origin and destination coordinates would simplify the process, so let’s add this feature (check the resources link, OSRM API). Let the user introduce the origin and destination coordinates, and calculate the distance automatically.
5. Add a couple of predefined fees (€/Km), e.g. Truck → 0.50€/Km, Van → 0.25€/Km
6. Draw the origin and destination in a map, and it would be nice to see the route
(check the resources links for more information).
Requirements\
● Use React\
● Feel free to use any library you want\
● Enjoy, and don’t take it too seriously, we don’t expect you to be working on it for days.\
Bonus features\
● Use Redux to request the information to the API.\
● Replace the coordinates inputs by address inputs that geolocate the coordinates\
using an external service (Google Maps API, Mapbox API...)\
Resources\
● Create React App: h​ ttps://create-react-app.dev/\
● Create React App + Redux: ​https://github.com/reduxjs/cra-template-redux\
● OSRM API: ​http://project-osrm.org/docs/v5.5.1/api/#general-options → given origin and destination coordinates, it gives you a lot of information (the path points, distance...)\
● Any library to generate maps: Google Maps, Mapbox...\
What will be evaluated\
● User experience and creativity\
● Code quality (we don’t expect you to create everything from scratch, so use create-react-app or any other generator)\

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
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
