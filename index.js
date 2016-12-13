const cssToJss =  require('jss-cli/cssToJss')

module.exports = function(content) {
  this.cacheable && this.cacheable()
  this.value = content
  return 'module.exports = ' + JSON.stringify(cssToJss({ code: content }), null, 2)
}
