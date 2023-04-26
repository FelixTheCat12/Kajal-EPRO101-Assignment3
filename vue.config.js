module.exports = {
  publicPath: "/",
outputDir: "dist",
indexPath: "index.html",
assetsDir: "static",
filenameHashing: true,
    lintOnSave: true,
    runtimeCompiler: true,
    productionSourceMap: true,
    integrity: false,
    transpileDependencies: [],
configureWebpack: {
  resolve: {},
  module: {
    rules: [],
  },
},
devServer: {
  clientLogLevel: "info",
  hot: true,
      hotOnly: true,
      open: true,
      openPage: "/",
  overlay: {
    warnings: false,
        errors: true,
  },
  port: 3011,
      // options: errors-only, minimal, none, normal, verbose
      stats: "verbose",
  watchOptions: {
    poll: true,
        ignored: "/node_modules/",
    aggregateTimeout: 300,
  },
},
}