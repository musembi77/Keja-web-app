resolve: {
  extensions: ['', '.js', '.jsx'],
  alias: {
    webworkify: 'webworkify-webpack',
  }
},
/** ... Previous loaders ... **/
{test: /\.json$/, loader: 'json-loader'},
{test: /\.js$/, include: path.resolve(__dirname, 'node_modules/webworkify/index.js'), loader: 'worker'},
{test: /mapbox-gl.+\.js$/, loader: 'transform/cacheable?brfs'},