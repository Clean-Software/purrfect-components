import path from 'path';
import { HotModuleReplacementPlugin, Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const mode = 'production';

const config: Configuration = {
    mode: mode,
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    optimization: {
        sideEffects: false,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: true,
                },
            }),
        ],
    },
    module: {
        rules: [
            // Loading css and sass files
            {
                test: /\.((s[ac]|c)ss)$/,
                use: [
                    {
                        loader: mode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            import: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            // Loading TypeScript files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
            // Loading images
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/public/icons/[name].[ext]',
                },
            },
            // Loading fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
    },
    // devServer: {
    //     static: path.resolve(__dirname, 'dist'),
    //     compress: true,
    //     port: 4000,
    // },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
                files: path.resolve(__dirname, './src/**/*.{ts,tsx,js,jsx}'),
            },
        }),
        new HotModuleReplacementPlugin(),
        new ESLintPlugin({
            files: ['src/**/*.ts', 'src/**/*.css'],
        }),
        new BundleAnalyzerPlugin(),
    ],
};

export default config;
