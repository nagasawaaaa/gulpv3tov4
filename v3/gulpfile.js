const gulp = require('gulp');
const rimraf = require('rimraf');
const runSequence = require('run-sequence');

const input = 'src';
const output = 'public_html';

gulp.task('clean', cb => {
  rimraf(output, cb);
});

gulp.task('css', () => {
  console.log('css');
});

gulp.task('js', () => {
  console.log('js');
});

gulp.task('imagemin', () => {
  console.log('imagemin');
});

gulp.task('default', cb => {
  return runSequence('clean', 'imagemin', ['css', 'js'], cb);
});
