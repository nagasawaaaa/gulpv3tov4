import { series, parallel, src, dest } from 'gulp';
import sass from 'gulp-sass';
import clean from './tasks/clean';
import output from './tasks/output';

async function css () {
  console.log('css');
}

async function scss () {
  return src('src/**/*.scss', {
    base: 'src',
    sourcemaps: true
  })
    .pipe(sass())
    .pipe(dest('public_html', { sourcemaps: './' }));
}

async function js () {
  console.log('js');
}

async function imagemin () {
  console.log('imagemin');
}

const build = series(
  clean,
  parallel(css, js, imagemin),
  output
);

export default build;
export const buildSass = scss;
