// Initialize modules
const gulp = require('gulp');

const browserSync = require('browser-sync').create();

// Browser-sync task
function browserSyncTask() {
  console.log('hello browser sync task');
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
}

exports.browserSyncTask = browserSyncTask;