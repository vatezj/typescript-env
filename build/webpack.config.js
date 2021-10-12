const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.ts", //编译时的入口文件
  output: {
    filename: "build.js"  //指定项目编译完时的输出文件
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]  //自动补齐文件后缀
  },
  module: {  //配置loader
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  // 配置本地开发指令
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  devServer: {
    compress: false, //是否启动压缩
    host: "localhost",
    port: 8081  //端口
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"  //编译时使用那个html文件为模板来编译
    })
  ]
};
  
