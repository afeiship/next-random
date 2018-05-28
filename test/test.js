var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-random');

describe('next/random', function () {

  it('nx.random', function () {
    // (248ms)
    var min = 3;
    var max = 100;
    var times = 10000000;
    var result;

    for (var i = 0; i < times; i++) {
      result = nx.random(min, max);
      assert.equal(result >= min && result < max, true);
    }

  });

});
