const path = require('path')

const config = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/index.js'),
        path.resolve(__dirname, 'src/decorator.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: [
                            //装饰器
                            ["@babel/plugin-proposal-decorators", {"legacy": true}],
                            // es6 class定义转换
                            ["@babel/plugin-proposal-class-properties", {"loose": true}]
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map'
}

module.exports = config