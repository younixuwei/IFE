const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.san$/,
                use: 'san-loader'
            }, {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "stage-2"]
                }
            },
            {
                test: /.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".san"],
        alias: {
            san: process.env.NODE_ENV === 'production' ?
                'san/dist/san.js' : 'san/dist/san.dev.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};