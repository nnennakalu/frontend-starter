// Initialize modules
const { src, dest } = require('gulp');
const postcss       = require('gulp-postcss');
const sourcemaps    = require('gulp-sourcemaps');
const sass          = require('gulp-sass');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const browserSync   = require("browser-sync").create();

// Testing exported file is working
function helloSass() {
	console.log("Hello I am from sass-task");
}

//  File path variables
const files = { sassPath: 'src/scss/**/*.scss' };

// Sass task
function sassTask() {
	var plugins = [
		autoprefixer(),
		cssnano()
	];
	
	return src(files.sassPath)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(plugins))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('dist'))
		.pipe(browserSync.stream());
}

exports.helloSass = helloSass;

exports.sassTask  = sassTask;