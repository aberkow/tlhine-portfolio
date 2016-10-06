const gulp = require('gulp');
const jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  return gulp.src('js/*.js')
  //esversion: 6 makes sure es6 syntax isn't picked up with warnings.
              .pipe(jshint( {esversion: 6} ))
              .pipe(jshint.reporter('jshint-stylish'));
});
