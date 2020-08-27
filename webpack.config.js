const glob = require('glob')

module.exports = {
    entry: {
            //Core
            // bundle1: glob.sync('../src/components/**.jsx'),
            // bundle2: ['./src/app.jsx']
            
            bundle1: glob.sync('../src/components/**.jsx'),
            bundle2: ['./src/appTest.jsx'],
            //bundle3: glob.sync('../src/components/tablas/**.js')
        },
    watch: true,
    output: {
        path: './build',
        // filename: "appBundle.js",
        filename: "appTestBundle.js",
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test: /.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['@babel/react'],
                  plugins: ['@babel/proposal-class-properties']
                }
              }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}