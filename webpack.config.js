const path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    entry:[
        './src/index.js'],
    output:{
        filename:'bundle.[hash:4].js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,  //排除掉node_modules,优化打包速度
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        //热更新,不是刷新
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            hash:true
        }),
        new CleanWebpackPlugin('dist')
    ],
};
