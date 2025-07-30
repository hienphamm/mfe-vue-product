import {defineConfig} from "@rspack/cli";
import {rspack, type RspackPluginFunction} from "@rspack/core";
import {VueLoaderPlugin} from "vue-loader";
import {ModuleFederationPlugin} from '@module-federation/enhanced/rspack';
import mfConfig from './module-federation.config';
import * as path from "node:path";

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["last 2 versions", "> 0.2%", "not dead", "Firefox ESR"];

export default defineConfig({
    entry: {
        main: "./src/main.ts"
    },
    resolve: {
        extensions: ["...", ".ts", ".vue"]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    experimentalInlineMatchResource: true
                }
            },
            {
                test: /\.(js|ts)$/,
                use: [
                    {
                        loader: "builtin:swc-loader",
                        options: {
                            jsc: {
                                parser: {
                                    syntax: "typescript"
                                }
                            },
                            env: {targets}
                        }
                    }
                ]
            },
            {
                test: /\.svg/,
                type: "asset/resource"
            },
            {
                test: /\.css$/,
                use: ["postcss-loader"],
                type: "css",
            },
        ]
    },
    plugins: [
        new rspack.HtmlRspackPlugin({
            template: "./index.html"
        }),
        new rspack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
        new VueLoaderPlugin() as RspackPluginFunction,
        new ModuleFederationPlugin(mfConfig)
    ],
    optimization: {
        minimizer: [
            new rspack.SwcJsMinimizerRspackPlugin(),
            new rspack.LightningCssMinimizerRspackPlugin({
                minimizerOptions: {targets}
            })
        ]
    },
    experiments: {
        css: true
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "auto",
        clean: true,
    },
    devServer: {
        historyApiFallback: {
            disableDotRule: true,
            index: '/index.html'
        },
        port: 8082,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
    }
});
