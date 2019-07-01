const path = require('path')
const glob = require('glob')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// loadfile
const resolve = filePath => {
    return path.resolve(__dirname, filePath)
}
// entry
const getEntries = () => {
    const entryFiles = glob.sync('./src/**/*.{js,jsx}')
    return entryFiles.reduce((sum, cur) => {
        const arr = cur.split('/')
        const len = arr.length
        const name = arr[len - 1].match(/[^\/]\w+(?=\.jsx?)/)[0]
        if (len === 3 || /views/.test(cur)) {
            return { ...sum, [name]: resolve(cur) }
        }
    }, {})
}


const config = {
    mode: 'development',
    entry: getEntries(),
    output: {
        path: resolve('dist'),
        filename: '[name].js'
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
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            // es6 class定义转换
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin()
    ]
}

module.exports = config