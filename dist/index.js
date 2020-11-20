/*!
 * name: @jswork/next-random
 * description: Create random number.
 * homepage: https://github.com/afeiship/next-random
 * version: 1.0.0
 * date: 2020-11-20 11:04:33
 * license: MIT
 */

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
