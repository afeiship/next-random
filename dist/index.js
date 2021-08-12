/*!
 * name: @jswork/next-random
 * description: Create random number.
 * homepage: https://github.com/afeiship/next-random
 * version: 1.0.0
 * date: 2021-08-12 09:07:13
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.random = function (inMin, inMax, inSize) {
    if (!inSize) return parseInt(Math.random() * (inMax - inMin), 10) + inMin;
    var result = [];
    for (var i = 0; i < inSize * 2; i++) {
      var target = nx.random(inMin, inMax);
      if (result.includes(target)) continue;
      if (result.length === inSize) return result;
      result.push(target);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.random;
  }
})();
