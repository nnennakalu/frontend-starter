// Initialize modules
const { src, dest } = require('gulp');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');

// Testing exported file is working
function helloJs() {
  console.log('Hello I am from js-task');
  
}

// File path variables
const files = { jsPath: 'src/js/**/*.js' };

// js task
function jsTask() {
  console.log('jsTask is working');
  return src(files.jsPath)
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("dist"));
}

exports.helloJs = helloJs;

exports.jsTask = jsTask;


