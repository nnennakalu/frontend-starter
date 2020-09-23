// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp");

// Import files
const { helloSass, sassTask } = require("./sass-task");

const { helloJs, jsTask } = require("./js-task");

const { cacheBusting, cacheBustTask } = require("./cache-bust-task");

const { helloWatch } = require("./watch-task");


exports.default = series(
	parallel(jsTask, sassTask, cacheBustTask),
	parallel(helloJs, helloSass, cacheBusting, helloWatch)
	);
	
	// exports.default = parallel(helloJs, helloSass, cacheBusting, helloWatch);


