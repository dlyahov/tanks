var path = require('path');

module.exports = {
    entry: './controller.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/out'
    },
    resolve : {
        modulesDirectories : ['src', 'node_modules'],
        extensions: ['', '.js', '.json']
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json" }
        ]
    }
}
