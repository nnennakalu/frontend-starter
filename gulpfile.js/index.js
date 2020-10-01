// Initialize modules
const { watch, series, parallel } = require("gulp");

// Import files
const { sassTask } = require("./sass-task");

const { jsTask } = require("./js-task");

const { cacheBustTask } = require("./cache-bust-task");

const { browserSyncTask } = require("./browser-sync-task");

//  File path variables
const files = {
  sassPath: "src/scss/**/*.scss",
  jsPath: "src/js/**/*.js",
  htmlPath: "src/*.html",
};

// Watch task
function watchTask() {
  watch([files.sassPath, files.jsPath], parallel(sassTask, jsTask));
}

// Default task
exports.default = parallel(
	browserSyncTask,
	series(
		parallel(sassTask, jsTask), 
		cacheBustTask, 
		watchTask
	));




