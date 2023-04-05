const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/login/login.ts', // Dẫn tới file login.js ta đã tạo
    output: {
        filename: 'login.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
                exclude: /node_modules/, // Loại trừ thư mục node_modules
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    // Creates `style` nodes from JS strings
                ],
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    // Chứa các plugins sẽ cài đặt trong tương lai
    plugins: [
        new HtmlWebpackPlugin({
            // template: './public/login.html',
            template: './html/login.html',
            filename: 'login.html',
        }),
    ],
};
