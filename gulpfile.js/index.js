// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp");

// Import files
const { helloSass, sassTask } = require("./sass-task");

const { helloJs, jsTask } = require("./js-task");

const { cacheBusting, cacheBustTask } = require("./cache-bust-task");

//  File path variables
const files = { 
	sassPath: 'src/scss/**/*.scss',
	jsPath  : 'src/js/**/*.js'
};

// Watch task
function watchTask() {
	watch([ files.sassPath, files.jsPath ],
		parallel(sassTask, jsTask));
}

// Default task
exports.default = series(
  parallel(sassTask, jsTask),
  cacheBustTask,
  watchTask,
  parallel(helloJs, helloSass, cacheBusting)
);
	



