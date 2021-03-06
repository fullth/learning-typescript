const path = require('path');
module.exports = {
    entry: '../src/entry1.js',
    output: {
        filename: 'build1.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        loaders:[{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }]
    }
}