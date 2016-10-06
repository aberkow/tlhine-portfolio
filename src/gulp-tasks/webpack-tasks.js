// the path to the config file
const config = require('../webpack.config.js');
const gulp = require('gulp');
// use webpack as part of gulp
const webpack = require('webpack-stream');

//grab everything from the js file, send through webpack and output to build/js
gulp.task('webpack', function() {
  return gulp.src('./js/*.js')
              .pipe(webpack(config))
              .pipe(gulp.dest('build/js/'));
});
