import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'build/index.js',
  name: "remarkBobril",
  output: {
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs()
  ]
};
