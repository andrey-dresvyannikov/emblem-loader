var Emblem = require('emblem');
var Handlebars = require('handlebars');

module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  var compiled = null;
  compiled = Emblem.compile(Handlebars, source);
  return 'module.exports =' + compiled;
}
