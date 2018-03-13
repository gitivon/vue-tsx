const { find } = require('lodash')
module.exports = {
  chainWebpack: config => {
    config.module
    .rule('vue')
      .use('vue-loader')
        .tap(options => {
          console.log(options.loaders.ts)
          var tsLoader = find(options.loaders.ts, { loader: 'ts-loader' })
          tsLoader.options.appendTsxSuffixTo = [/\.vue$/]
          Object.assign(options.loaders, {
            tsx: options.loaders.ts
          })
          return options
        })
  },
}