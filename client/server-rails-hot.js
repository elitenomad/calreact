import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';import webpackConfig from './webpack.client.rails.hot.config';

const hotRailsPort = process.env.HOT_RAILS_PORT || 3500;const compiler = webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, {
    contentBase: `http://lvh.me:${hotRailsPort}`,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
        colors: true,
        hash: false,
        version: false,
        chunks: false,
        children: false,
    },
    headers: { "Access-Control-Allow-Origin": "http://localhost:5000" },
});devServer.listen(hotRailsPort, 'localhost', err => {
    if (err) console.error(err);
    console.log(
        `=> 🔥  Webpack development server is running on port ${hotRailsPort}`
    );
});