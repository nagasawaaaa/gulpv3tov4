const gulp = require('gulp');
const rimraf = require('rimraf');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');

const input = 'src';
const output = 'public_html';

gulp.task('clean', cb => {
  rimraf(output, cb);
});

gulp.task('css', () => {
  console.log('css');
});

gulp.task('sass', () => {
  return gulp.src('src/**/*.scss', {
      base: 'src'
    })
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public_html'));
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
