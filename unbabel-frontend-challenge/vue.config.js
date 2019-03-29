module.exports = {
  chainWebpack: config => {
    config.module
      .rule("svg")
      .use("file-loader")
      .loader("vue-svg-loader");
  }
};

module.exports = {
  configureWebpack: {
    devtool: "source-map"
  }
};
