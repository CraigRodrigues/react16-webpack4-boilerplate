const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebPackPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    entry: './src/index.js',
    devServer: { contentBase: './dist' },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.(css)$/,
                use: [ 'css-loader', 'style-loader' ]
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [ htmlWebPackPlugin ]
};
