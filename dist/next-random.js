(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.random = function ( inMin, inMax ) {
    return parseInt(Math.random() * inMax, 10) + inMin;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.random;
  }

}());
