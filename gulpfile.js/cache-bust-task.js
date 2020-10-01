// Initialize modules
const { src, dest } = require('gulp');

const replace = require("gulp-replace");

// cache busting
const cbString = new Date().getTime();
function cacheBustTask() {	
	return src(['./src/index.html'])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest('./src'));
}

exports.cacheBustTask = cacheBustTask;

