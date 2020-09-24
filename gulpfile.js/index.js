// Initialize modules
const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync");

// Import files
const { helloSass, sassTask } = require("./sass-task");

const { helloJs, jsTask } = require("./js-task");

const { cacheBusting, cacheBustTask } = require("./cache-bust-task");

//  File path variables
const files = {
  sassPath: "src/scss/**/*.scss",
  jsPath: "src/js/**/*.js",
  htmlPath: "src/*.html",
};

// Watch task
function watchTask() {
  browserSync.init({
    server: {
      baseDir: "../",
    },
  });

  watch([files.sassPath, files.jsPath], parallel(sassTask, jsTask));

  watch(files.htmlPath).on("change", browserSync.reload);
}

// Default task
exports.default = series(
  parallel(sassTask, jsTask),
  cacheBustTask,
  watchTask,
  parallel(helloJs, helloSass, cacheBusting)
);

exports.watch = watchTask;
