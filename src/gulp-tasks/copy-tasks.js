const gulp = require('gulp');
const sequence = require('gulp-sequence');

copy = {
  copyCSS: function(){
    gulp.src('./css/**/*')
      .pipe(gulp.dest('./build/css'))
  },
  copyImages: function(){
    gulp.src('./images/**/*')
      .pipe(gulp.dest('./build/images'))
  },
  copyJs: function(){
    gulp.src('./js/**/*')
      .pipe(gulp.dest('./build/js'))
  },
  copyRoot: function(){
    gulp.src(['./*.html', './package.json'])
      .pipe(gulp.dest('./build'))
  }
};

gulp.task('copyCSS', copy.copyCSS);
gulp.task('copyImages', copy.copyImages);
gulp.task('copyJs', copy.copyJs);
gulp.task('copyRoot', copy.copyRoot);
gulp.task('copyAll', function(cb){
  sequence('copyCSS', 'copyImages', 'copyJs', 'copyRoot', cb);
});
