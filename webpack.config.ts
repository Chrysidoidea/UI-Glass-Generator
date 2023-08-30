const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: ["@babel/register" , "./index.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"]
                    },
                },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html")
    })]
}