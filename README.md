# next-random
> Create random number.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-random
```

## usage
```js
import '@jswork/next-random';

// case1: get random
nx.random(1,100);   // 1 ~ 99


// case2: get a random list
nx.random(1,100, 20);
/*
[
  31, 33, 57, 42, 53, 34, 2,
  17, 63, 46, 96, 81, 68, 5,
  89, 73, 94, 58, 65, 41
]
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-random/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-random
[version-url]: https://npmjs.org/package/@jswork/next-random

[license-image]: https://img.shields.io/npm/l/@jswork/next-random
[license-url]: https://github.com/afeiship/next-random/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-random
[size-url]: https://github.com/afeiship/next-random/blob/master/dist/next-random.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-random
[download-url]: https://www.npmjs.com/package/@jswork/next-random
