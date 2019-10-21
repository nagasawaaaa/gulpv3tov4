import del from 'del';
const output = 'public_html';

export default function clean () {
  return del(output);
}
