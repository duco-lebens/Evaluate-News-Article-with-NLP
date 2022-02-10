# Evaluate news article with NLP project

Project number four in the front end developers course from Udacity.

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external URLs

## How to use / installation steps
Make sure Node and npm are installed from the terminal.

node -v
npm -v

Change into the project folder
cd <project directory>

Clone the repo
git clone <repo>

Install npm
npm install

Install loaders and plugins:
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

You will have to sign up for your own API key at meaningcloud.com
This API-key has to be put in a .env file in the root of the project

Create a new .env file in the root of your project
Only one line is needed with the text:
API_KEY=1234567890abcd

Be sure to configure environment variables using dotenv package
npm install dotenv

## Build the project
npm run build-prod

## Start the local server
npm start

## Start the local server
Open a browser at http://localhost:8080/

## Author
Made by Duco Lebens contact info on my Github page

## Credits
Code used found in Udacity's front-end webdevelopers course material and
on W3Schools and various entries on stackoverflow.com