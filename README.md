## Emblem loader for webpack

[Emblem](http://emblemjs.com/) (Emblem Templates) loader for [webpack](http://webpack.github.io/). Uses emblem's compile function to handlebars.js.

## Installation

`npm install emblem-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var template = require("emblem!./file.em");

// And then use it somewhere in your code
template(data) // Pass object with data
```

### webpack config
You can also set it up the following in the webpack.config.js file
```javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.em$/, loader: emblem-loader }
    ]  
  },
  resolve: {
    extensions: ['.em']
  }
}
```

## License

[MIT](http://www.opensource.org/licenses/mit-license)

