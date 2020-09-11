/**
 * @description 开发环境配置
 * @author codeTom97
 */

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');  // 错误信息增强

const webpackBase = require('./webpack.base.config');


const HOST = 'localtion';
const PORT = '8080';


const devConfig = merge(webpackBase, {
    mode: "development",        // 开发模式
    devtool: "eval-source-map",

    // 入口配置
    entry: {
        main: "./examples/index",
        vendors: ["vue", "vue-router"]
    },

    // 出口配置
    output: {
        path: path.join(__dirname, '..', 'examples/dist'),
        publicPath: "/",
        filename: "[name].js",
        chunkFilename: "[name].chunk.js"
    },

    devServer: {
        hot: true,
        host: HOST,
        port: PORT,
        overlay: { warnings: false, errors: true },     // 开启错误提醒
        publicPath: "/",                                // 打包文件可在浏览器中访问
        quiet: true,                                    // 开启后控制台不在输出打包信息
    },

    // 快速路径
    resolve: {
        alias: {
          codeui: "../../src/index",
          vue: "vue/dist/vue.esm.js"
        }
    },

    // 插件配置
    plugins: [
        // new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),  // 热重载
        new HTMLPlugin({
            inject: true,
            filename: path.join(__dirname, "../examples/dist/index.html"),
            template: path.join(__dirname, "../examples/index.html"),
            favicon: ''
        }),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`You can application is running here http://${HOST}:${PORT}`],
                clearConsole: true
            }
        })
    ]
});


module.exports = devConfig;