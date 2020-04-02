const AngularNamedLazyChunksWebpackPlugin = require("angular-named-lazy-chunks-webpack-plugin");

module.exports = {
  output: {
    jsonpFunction: "jsonpcustomer"
  },
  plugins: [new AngularNamedLazyChunksWebpackPlugin()]
};
