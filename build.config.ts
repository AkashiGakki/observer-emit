import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'dist/index.js'
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
