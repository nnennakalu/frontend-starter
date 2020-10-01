// Initialize modules
const { src, dest, watch, parallel } = require("gulp");

const sass = require("gulp-sass");

const browserSync = require("browser-sync").create();

//  Files
const files = {
  sassPath: "src/scss/**/*.scss",
  jsPath: "src/js/**/*.js",
  htmlPath: "src/*.html",
};

// Sass Task
function cssTask() {
	return src(files.sassPath)	
    .pipe(sass().on("error", sass.logError))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

function browserSyncTask() {
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });

  watch([files.sassPath], cssTask);
  watch([files.jsPath]).on("change", browserSync.reload);
  watch([files.htmlPath]).on("change", browserSync.reload);
}

exports.browserSyncTask = parallel(cssTask, browserSyncTask);
