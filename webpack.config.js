const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
// leidin ad skranni okkar sem vid aetlum ad exporta
 entry: './src/client/index.js',

// hvert a ad setja thetta
 output: {

// buum til eina skra og i hana fara allar js skrar
 filename: 'main.js',

// byrjadu ad vera i nuverandi moppu og baettu sidan vid dist moppunni
 path: path.resolve(__dirname, 'dist')
 },
 plugins: [
  new HtmlWebpackPlugin({
     //title: "Greeting page"
     template: "./src/client/index.html"
   })
  ],
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:5000"
    }
  }
}
