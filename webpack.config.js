const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ],
    },

    entry: {
        app: './src/index.js',

    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase : './dist',
        hot:true
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/public/temp.html'
        }),
    ],
    output: {

        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};