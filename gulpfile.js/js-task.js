// Initialize modules
const { src, dest } = require('gulp');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');

// File path variables
const files = { jsPath: 'src/js/**/*.js' };

// js task
function jsTask() {
  return src(files.jsPath)
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("dist"));
}

exports.jsTask = jsTask;


