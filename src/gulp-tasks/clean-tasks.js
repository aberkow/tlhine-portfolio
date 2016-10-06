const del = require('del');
const gulp = require('gulp');
const sequence = require('gulp-sequence');

clean = {
  cleanCSS: function(){
    return del.sync([
      './build/css/**',
      '!./build/css'
    ])
  },
  cleanImages: function(){
    return del.sync([
      './build/images/**',
      '!./build/images'
    ])
  },
  cleanJs: function(){
    return del.sync([
      './build/js/**',
      '!./build/js'
    ])
  },
  cleanRoot: function(){
    return del.sync([
      './build/**/*.html',
      '!./build/node_modules',
      '!./build/.gitignore',
      '!./build/.git',
      '!./build/package.json',
      '!./build'
    ])
  },
  dryRun: function(){
    return del([
      './build/**/*.html',
      '!./build'
    ], {
      dryRun: true
    })
    .then(paths => {
      console.log('files/folders that would be deleted:\n', paths.join('\n'));
    });
  }
};

gulp.task('cleanCSS', clean.cleanCSS);
gulp.task('cleanImages', clean.cleanImages);
gulp.task('cleanJs', clean.cleanJs);
gulp.task('cleanRoot', clean.cleanRoot);
gulp.task('dryRun', clean.dryRun);
gulp.task('cleanAll', function(cb){
  sequence('cleanCSS', 'cleanImages', 'cleanJs', 'cleanRoot', cb);
});
