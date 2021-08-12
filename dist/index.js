/*!
 * name: @jswork/next-random
 * description: Create random number.
 * homepage: https://github.com/afeiship/next-random
 * version: 1.0.0
 * date: 2021-08-12 09:02:44
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.random = function (inMin, inMax, inSize) {
    if (!inSize) return parseInt(Math.random() * (inMax - inMin), 10) + inMin;
    var result = [];
    for (var i = 0; i < inSize; i++) {
      var target = nx.random(inMin, inMax);
      !result.includes(target) && result.push(target);
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.random;
  }
})();
