import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'dist/index.mjs',
    // 'src/index',
    // {
    //   builder: 'mkdist',
    //   input: './src',
    //   outDir: './build'
    // },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
