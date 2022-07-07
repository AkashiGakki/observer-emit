const { build } = require('esbuild')
const { Generator } = require('npm-dts')

new Generator({
  entry: 'src/index.ts',
  output: 'dist/index.d.ts',
}).generate()

const sharedConfig = {
  entryPoints: ['src/index.ts'],
  // outdir: 'dist',
  bundle: true,
  // sourcemap: true,
  minify: true,
  // splitting: true,
  // target: ['esnext']
}

build({
  ...sharedConfig,
  platform: 'node', // for CJS
  outfile: 'dist/index.cjs.js',
})

build({
  ...sharedConfig,
  outfile: 'dist/index.mjs.js',
  platform: 'neutral', // for ESM
  format: 'esm',
})
