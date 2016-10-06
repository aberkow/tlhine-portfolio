const gulp = require('gulp');
const sequence = require('gulp-sequence');
const requireDir = require('require-dir');

// require all the tasks in the gulp-tasks folder
// if there are subfolders, hit each folder/file recursively
// paths in gulp-tasks should be relative to THIS file.
// NOT the gulp-tasks folder!
requireDir('./gulp-tasks', {recurse: true});

/*
gulp.task('name', function(cb) {
  sequence('one', 'two', 'three', cb);
});
*/

gulp.task('watch', function() {
  gulp.watch('./js/*.js', ['jshint']);
  gulp.watch('./scss/*.scss', ['scss']);
});

gulp.task('default', function(cb) {
  sequence('watch', 'webpack', cb);
});
