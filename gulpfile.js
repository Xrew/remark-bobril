const gulp = require('gulp');


const filesToPublish = [
  'package.json',
  'README.md',
  'yarn.lock',
  'LICENSE',
  '.npmignore',
  '.gitignore'
];
gulp.task('copy', function () {
  return gulp
    .src(filesToPublish)
    .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['copy']);
