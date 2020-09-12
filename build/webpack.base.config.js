/**
 * @description 公共配置
 * @author codeTom97
 */


const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}


const config = {
    // loader配置
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        css: [
                            "vue-style-loader",
                            {
                                loader: "css-loader",
                                options: { sourceMap: true }
                            }
                        ],
                        less: [
                            "vue-style-loader",
                            {
                                loader: "css-loader",
                                options: { sourceMap: true }
                            },
                            "less-loader"
                        ]
                    },
                    postLoaders: {
                        html: "babel-loader?sourceMap"
                    },
                    sourceMap: true // 定位根总
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: { sourceMap: true },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: [
                    {
                        loader: "style-loader",
                        options: {
                          sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ],
            },
            {
                test: /\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader"
            },
            /* html模板优化 */
            {
                test: /\.(html|tpl)$/,
                loader: "html-loader"
            }
        ]
    },
    // 快捷入口
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "assets": resolve("assets"),
            "@": resolve("src")
        }
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'VERSION' : `'${pkg.version}'`
        })
    ]
}

module.exports = config;