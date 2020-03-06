const path = require( 'path' );
// const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const { styles } = require("@ckeditor/ckeditor5-dev-utils");


module.exports = {
  entry: `${ __dirname }/src/components/Form.js`,
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "editor.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
        include: [
          path.resolve( __dirname, './src/' ),
          path.resolve( __dirname, './node_modules/@ckeditor/' )
        ],
      },
      {
        test: /\.svg$/,
        use: ["raw-loader"]
      },
      {
        test: /\.scss$/,

        use: [
          require.resolve( 'style-loader' ),
          require.resolve( 'css-loader' ),
          require.resolve( 'sass-loader' )
        ]
       },
      {
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag"
            }
          },
          {
            loader: "postcss-loader",
            options: styles.getPostCssConfig({
              themeImporter: {
                themePath: require.resolve("@ckeditor/ckeditor5-theme-lark")
              },
              minify: true
            })
          }
        ]
      }
    ]
  },
  plugins: [
  ]
};
