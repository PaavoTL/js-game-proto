const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  module:{
    rules:[
      {
        test: /\.(png|jpg|gif)$/i,  
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8192,
            name: 'images/[hash]-[name].[ext]'
          } 
        }]
      }
    ]
  }
};