const path = require('path')

const config = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/index.jsx'),
        path.resolve(__dirname, 'src/decorator.js'),
        path.resolve(__dirname, 'src/observable.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/env'],
                            ['@babel/preset-react', {
                                // 'pragma': 'dom',
                                // 'pragmaFrag': 'DomFrag',
                                'throwIfNamespace': false
                            }]
                        ],
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