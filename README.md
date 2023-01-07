# First React App with the Weather Forecast App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the project

This is a React application that displays a weather forecast for a given location. The app retrieves data from a weather API using the fetch function, and displays the data using custom components and custom hooks. The app updates the weather data whenever the user submits a new city in the form.

## Features in the project

- The user can enter the name of a city, and a button to submit the form.

- Working with APIs to retrieve weather data from a third-party service (Open Weather Map) and incorporate it into your app.

- Displaying the current weather for the city, including the temperature, humidity, and a description of the weather.

- Displaying a 5-day forecast for the city, including the temperature, humidity, and a description of the weather for each day.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deploy the React Application

To deploy the application on github pages, following the below steps:

1. Add GitHub Pages dependency package

Install "gh-pages" package using the below command:

### `npm install gh-pages --save-dev`

2. Add homepage property`

Add the below property to your package.json file:

- **"homepage": "https://{username}.github.io/{your_repository}"**

3. Add deploy scripts 

Add both predeploy and deploy property scripts to the package.json file as below:

> "predeploy": "npm run build",
>
> "deploy": "gh-pages -d build"

4. Create a remote GitHub repository

- Initialize the Git using "git init" command.

- Add it as remote using "git remote add origin your-github-repository-url.git" command.

5. Deploy the Application to GitHub Pages

Now run the below command to deploy your react application to GitHub Pages:

### `npm run deploy`

6. Access deployed site

- Select branch to "gh-pages" and click on the "Save" button in Github Pages Section.

Now, you can access the deployed site using the published URL!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Live app

<a href="https://doananhtingithub40102.github.io/first-react-app/" target="_blank">Weather Forecast App</a>
