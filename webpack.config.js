const Path = require('path');

const ROOT_PATH = __dirname;
const TARGET_PATH = Path.join(ROOT_PATH, './target/');
const SRC_PATH = Path.join(ROOT_PATH, './src/');

const ENTRY_FILENAME = 'index.ts';
// const OUTPUT_FILENAME = '[name].[chunkhash:5].js';
const OUTPUT_FILENAME = '[name].[contenthash:5].js';

const config = {
    mode: 'production',
    entry: Path.resolve(SRC_PATH, ENTRY_FILENAME),
    output: {
        path: TARGET_PATH,
        filename: OUTPUT_FILENAME,
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            maxAsyncRequests: 20,
            maxInitialRequests: 20,
        },
    },
};

module.exports = config;
