var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-random');

describe('next/random', function () {

  it('nx.random', function () {
    var min = 0;
    var max = 10;

    var rs1 = nx.random(min,max);
    var rs2 = nx.random(min,max);
    var rs3 = nx.random(min,max);
    var rs4 = nx.random(min,max);
    var rs5 = nx.random(min,max);
    var rs6 = nx.random(min,max);
    var rs7 = nx.random(min,max);
    var rs8 = nx.random(min,max);
    var rs9 = nx.random(min,max);
    var rs10 = nx.random(min,max);
    var rs11 = nx.random(min,max);
    var rs12 = nx.random(min,max);
    var rs13 = nx.random(min,max);
    var rs14 = nx.random(min,max);
    var rs15 = nx.random(min,max);
    var rs16 = nx.random(min,max);
    var rs17 = nx.random(min,max);
    var rs18 = nx.random(min,max);
    var rs19 = nx.random(min,max);
    var rs20 = nx.random(min,max);

    console.log(rs1,rs2,rs3,rs4,rs5,rs6,rs7,rs8,rs9,rs10);
    console.log(rs11,rs12,rs13,rs14,rs15,rs16,rs17,rs18,rs19,rs20);

    assert.equal(rs1 >= min && rs1<=max, true);
    assert.equal(rs2 >= min && rs2<=max, true);
    assert.equal(rs3 >= min && rs3<=max, true);
    assert.equal(rs4 >= min && rs4<=max, true);
    assert.equal(rs5 >= min && rs5<=max, true);
    assert.equal(rs6 >= min && rs6<=max, true);
    assert.equal(rs7 >= min && rs7<=max, true);
    assert.equal(rs8>= min && rs8<=max, true);
    assert.equal(rs9 >= min && rs9<=max, true);
    assert.equal(rs10 >= min && rs10<=max, true);
    assert.equal(rs11 >= min && rs11<=max, true);
    assert.equal(rs12 >= min && rs12<=max, true);
    assert.equal(rs13 >= min && rs13<=max, true);
    assert.equal(rs14 >= min && rs14<=max, true);
    assert.equal(rs15 >= min && rs15<=max, true);
    assert.equal(rs16 >= min && rs16<=max, true);
    assert.equal(rs17 >= min && rs17<=max, true);
    assert.equal(rs18 >= min && rs18<=max, true);
    assert.equal(rs19 >= min && rs19<=max, true);
    assert.equal(rs20 >= min && rs20<=max, true);
  });

});
