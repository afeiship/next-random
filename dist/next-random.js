/*!
 * name: @feizheng/next-random
 * description: Create random number.
 * url: https://github.com/afeiship/next-random
 * version: 1.0.2
 * date: 2020-04-11 20:52:55
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.random = function (inMin, inMax) {
    var addition = inMax - inMin;
    return parseInt(Math.random() * addition, 10) + inMin;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.random;
  }
})();

//# sourceMappingURL=next-random.js.map
