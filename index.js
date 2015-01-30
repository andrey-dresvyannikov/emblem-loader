var compiler = require('ember-template-compiler');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  return 'module.exports = '
}
