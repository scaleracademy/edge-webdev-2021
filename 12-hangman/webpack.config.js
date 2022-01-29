module.exports = {
  mode: "development",
  entry: "./app.js",
  watch: true,
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.s[ac]ss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  }
}
