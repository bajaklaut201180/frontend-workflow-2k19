module.exports = {
    mode: "development",
    entry: {
        app: "./resources/js/app.js"
    },
    output: {
        path: __dirname +"/public/js/",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};