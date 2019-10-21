import { src, dest } from 'gulp';

export default function output() {
  console.log('output');
  return src('./src/**/*.js')
    .pipe(dest('public_html'));
}

