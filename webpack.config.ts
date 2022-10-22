import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

module.exports = () => {

    return {
        mode: 'development',
        entry: './src/index.tsx',
        devtool: 'inline-source-map',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name][contenthash].js',
            clean: true
        },
        devServer: {
            static: './dist',
            compress: true,
            hot: true,
            liveReload: true,
            client: {
                logging: 'info',
                progress: true
            },
            historyApiFallback: true
        },
        module: {
            rules: [
                /* {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                */
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.svg$/,
                    use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                        limit: 10000,
                        },
                    }
                    ]
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.jsx', '.ts', '.js', '.json']
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new Dotenv()
        ],
        stats: {
            errorDetails: false,
        },
    }
}