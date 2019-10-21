import { series, parallel } from 'gulp';
import clean from './tasks/clean';
import output from './tasks/output';

async function css () {
  console.log('css');
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
