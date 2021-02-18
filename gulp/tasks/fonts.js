const gulp = require('gulp')

module.exports = function fonts() {
	return gulp
		.src(["src/**/*.woff"])
		.pipe(gulp.dest('build/'))
		.pipe(gulp.src(["src/**/*.woff2"]))
		.pipe(gulp.dest('build/'));
}


