(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.random = function (inMin, inMax, inSize) {
    if (!inSize) return parseInt(Math.random() * (inMax - inMin), 10) + inMin;
    var result = [];
    for (var i = 0; i < inSize * 10; i++) {
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
