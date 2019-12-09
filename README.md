# Frontend-workflow-2k19 using Gulp
I wanted to share my frontend workflow 2k19 that I use for simple web design that use HTML, SCSS, and Javascript. I'm using Gulp, webpack, and browserSync to development process.
## powered by nodejs
Install [Node.js](https://nodejs.org/en/) if you don't have it yet
## checked packaged.json
Check the dependencies in package.json, use npm install `npm i @babel/core babel-loader @babel/preset-env browser-sync gulp gulp-autoprefixer gulp-sass jquery webpack-cli webpack-stream --save-dev`
In this proejct, Gulp is configured to run the following functions:
* Compile the SCSS files to CSS in resources folder
* Autoprefix the CSS file
* Compile the JS files in resources folder use webpack
* BrowserSync to check every change in your JS and SCSS Files and compile it directly to Public folder

SCSS structure using the SMACSS method (Scalable and Modular Architecture for CSS). You are working on resources folder, happy working !!!
