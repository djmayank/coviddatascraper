# Covid data tracker

A PWA app for the covid data visualization for INDIA's data statewise.

#### GITHUB REPOSITORIES

- Frontend - https://github.com/djmayank/coviddatascraper
- Backend - https://github.com/djmayank/covidtracker

### Frontend

- Created using react and hosted on one of my subdomains.
- App is created without using create-react-app.
- Service worker is implemented and the response of api is cached for 2mins and images and other stuff is cached for 30 days since they are less prone to changes.
- Data is presented in the form of table and with a chart which is created using chart.js
- App is designed for all type of devices and is responsive.
- App is hosted on my subdomain.

[App link](https://covid.mayankkhanna.in/) https://covid.mayankkhanna.in/

### Backend

- Created using express.
- Used Cheerio to scrape data from the [data source](https://www.mohfw.gov.in/).
- Data is compiled and merged which is served in the form of JSON object.
- Backend is hosted on heroku.

[Backend/API link](https://covid-scraper-mk.herokuapp.com/) https://covid-scraper-mk.herokuapp.com/

## Demo

![Demo](https://covid.mayankkhanna.in/demo.gif)

## Steps to run this repository

- `yarn install` to install the packages
- `yarn start` to start the server

## Tech stack

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Heroku](https://www.heroku.com/)

## Author

- [@djmayank](https://www.github.com/djmayank)
- [Portfolio](https://mayankkhanna.in/) https://mayankkhanna.in/
