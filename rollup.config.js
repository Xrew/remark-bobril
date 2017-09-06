import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'build/index.js',
  dest: 'dist/index.js',
  moduleName: "remarkBobril",
  format: 'umd',

  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs()
  ]
};
