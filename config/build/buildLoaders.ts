import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }

    const cssLoader = {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
        ],
    };

    const cssModulesLoader = {
        test: /\.module\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                },
            },
        ],
    };
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        cssLoader,
        cssModulesLoader,
        tsLoader,
        svgrLoader
    ]
}