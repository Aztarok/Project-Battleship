const path = require("path");
const NodePolyFillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new NodePolyFillPlugin()
    ],
    resolve: {
        fallback: {
            path: require.resolve("path-browserify")
        },
    },
};