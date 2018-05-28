var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-random');

describe('next/random', function () {

  it('nx.random', function () {
    // (238ms)
    var min = 0;
    var max = 100;
    var times = 10000000;
    var result;

    for (var i = 0; i < times; i++) {
      result = nx.random(min, max);
      // console.log(result);
      assert.equal(result >= 0 && result < 100, true);
    }
  });

});
