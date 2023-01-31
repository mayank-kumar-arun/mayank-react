const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const devdeps = require("../../package.json").devDependencies;
const deps = require("../../package.json").dependencies;
require("dotenv").config({ path: "./.env" });

const buildDate = new Date().toLocaleString();
const path = require("path");
const fs = require("fs");
const mfeFilePath = path.join(__dirname, "../", "mfe-config.ts");
let mfeConfig = fs.readFileSync(mfeFilePath).toString();
let mfeConfigJSON = mfeConfig.substring(
	mfeConfig.indexOf("{"),
	mfeConfig.lastIndexOf("}") + 1
);
mfeConfigJSON = JSON.parse(mfeConfigJSON);

module.exports = (env, argv) => {
	return {
		entry: "./src/index.ts",
		mode: "development",
		devServer: {
			port: 8080,
			open: true,
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			hot: true,
			historyApiFallback: true,
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js"],
		},
		module: {
			rules: [
				{
					test: /\.(png|jpe?g|gif|mp4)$/i,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "[name].[ext]",
								outputPath: "assets/",
								publicPath: "assets/",
							},
						},
					],
				},
				{
					test: /\.svg$/,
					use: ["@svgr/webpack"],
				},

				{ test: /\.(config)$/, loader: "file-loader" },
				{
					test: /\.(scss|css)$/,

					use: ["style-loader", "css-loader", "sass-loader"],

					exclude: "/node_modules/",
				},
				{
					test: /\.(js|jsx|tsx|ts)$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					options: {
						cacheDirectory: true,
						babelrc: false,
						presets: [
							[
								"@babel/preset-env",
								{ targets: { browsers: "last 2 versions" } },
							],
							"@babel/preset-typescript",
							"@babel/preset-react",
						],
						plugins: [
							"react-hot-loader/babel",
							["@babel/plugin-proposal-class-properties", { loose: true }],
							["@babel/plugin-proposal-private-methods", { loose: true }],
							[
								"@babel/plugin-proposal-private-property-in-object",
								{ loose: true },
							],
						],
					},
				},
			],
		},

		plugins: [
			new CopyWebpackPlugin({
				patterns: [
					{
						from: "src/assets",
						to: "assets",
					},
				],
			}),
			new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
			new webpack.DefinePlugin({
				"process.env": JSON.stringify(process.env),
			}),
			new ModuleFederationPlugin({
				name: "host",
				remotes: {
					Dashboard: mfeConfigJSON["dashboard"].url,
					Login: mfeConfigJSON["login"].url,
					ForgotPassword: mfeConfigJSON["forgotpassword"].url,
					Tenant: mfeConfigJSON["tenant"].url,
					Maintainance: mfeConfigJSON["maintainance"].url,
					WebhookSubscription: mfeConfigJSON["webhookSubscription"].url,
					VisualSetting: mfeConfigJSON["visualSetting"].url,
					Edition: mfeConfigJSON["edition"].url,
					Settings: mfeConfigJSON["settings"].url,
					AuditLogs: mfeConfigJSON["auditLogs"].url,
					Users: mfeConfigJSON["users"].url,
					Roles: mfeConfigJSON["roles"].url,
					OrganizationUnits: mfeConfigJSON["organizationUnits"].url,
					Language: mfeConfigJSON["language"].url,
					DynamicProperties: mfeConfigJSON["dynamicProperties"].url,
					IconList: mfeConfigJSON["iconlist"].url
				},
				shared: {
					...devdeps,
					...deps,

					react: { singleton: true, eager: true, requiredVersion: deps.react },
					"react-dom": {
						singleton: true,
						eager: true,
						requiredVersion: deps["react-dom"],
					},
				},
			}),
			// new CopyWebpackPlugin([{ from: "./public/images", to: "./assests" }]),
			new HtmlWebpackPlugin({
				template: "./public/index.html",
			}),
			// new ForkTsCheckerWebpackPlugin(),
		],
	};
};
