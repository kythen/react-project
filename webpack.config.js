var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:'./app/index.jsx',
    output:{
        path: __dirname + "/build",
        filename:"bundle.js"
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options:{
                	presets:["react","es2015"]
                }
            },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     loader: "style!css!postcss"
            // },
            // {
            //     test: /\.(png|gif|jpg|jpeg|bmp)$/i,
            //     loader: "url-loader"
            // }
        ]
    },
    plugins:[
        //html模板插件
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:__dirname+"/app/index.html"
        }),
        //热加载插件
        new webpack.HotModuleReplacementPlugin()

    ],
    devServer:{
        historyApiFallback:true,
        inline:true,
        hot:true
    }
}