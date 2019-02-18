module.exports = {
  // lintOnSave: false,//关闭eslint
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({ remUnit: 75 }) // 换算的基数
        ]
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.qxnrtv.com/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          // "^/api": ""
        }
      }
    }
  }
};
