const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
// the paths of node-bourbon and node-neat as strings
const bourbon = require('node-bourbon').includePaths[0];
const neat = require('node-neat').includePaths[1];
const sass = require('gulp-sass');

const autoprefixerOptions = {
  browsers: 'last 3 versions'
};

gulp.task('scss', function() {
  return gulp.src('scss/*.scss')
              // pass an array of options to includePaths
              .pipe(sass(
                    {
                      includePaths: [bourbon, neat]
                    }
                  ).on('error', sass.logError))
              .pipe(autoprefixer(autoprefixerOptions))
              .pipe(gulp.dest('./css'));
});
