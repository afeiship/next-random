(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { context: global };

  nx.random = function (inMin, inMax) {
    var addition = inMax - inMin;
    return parseInt(Math.random() * addition, 10) + inMin;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.random;
  }
})();
