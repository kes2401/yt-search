# YT Search

This is a simple single page application that allows you to search YouTube for videos, giving you instant results from YouTube as you type in the search input.

This app was built while completing the 'Modern React with Redux' course by Stephen Grider, which is available [here](https://www.udemy.com/react-redux/).

## Install & Run

To get started:
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Offline First

The production build of this app includes a Service Worker so that the app loads from a cache on future visits. This makes it a fully functional, offline first Progressive Web App and future vists to the app will render even when there is no network access.

To build the app for production you should run `npm run build` which will include the service worker and prepare the app for deployment. The app is built to the `build` folder.

The service worker will not work in development mode.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
