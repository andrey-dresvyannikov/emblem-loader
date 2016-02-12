var emblem = require('emblem')['default'];

module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  return emblem.compile(source);
}
