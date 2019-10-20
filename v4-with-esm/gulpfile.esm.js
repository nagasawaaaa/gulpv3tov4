import { series, parallel } from 'gulp'

function css (done) {
  console.log('css');
  done();
}

function js (done) {
  console.log('js');
  done();
}

function imagemin (done) {
  console.log('imagemin');
  done();
}

const build = series(css, js, imagemin);

export default build;
