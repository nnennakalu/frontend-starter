// Initialize modules
const { src, dest } = require('gulp');

const replace = require("gulp-replace");

// Testing exported file is working
function cacheBusting() {
  console.log("Hello I am from cache-bust-task");
}

// cache busting
const cbString = new Date().getTime();
function cacheBustTask() {	
	return src(['./src/index.html'])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest('./src'));
}

exports.cacheBusting = cacheBusting;

exports.cacheBustTask = cacheBustTask;

