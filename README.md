# intersection-of

[![CircleCI](https://circleci.com/gh/nivrith/intersection-of/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/intersection-of/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/intersection-of.svg)](https://www.npmjs.com/package/intersection-of)
[![node](https://img.shields.io/node/v/intersection-of.svg)](https://www.npmjs.com/package/intersection-of)
[![License MIT](https://img.shields.io/github/license/nivrith/intersection-of.svg)](https://github.com/nivrith/intersection-of/blob/master/LICENSE)

Find unique common elements among given arrays

## Highlights

- Super Fast

- Written in Typescript

- Async and Sync methods

- Returns Promise

## Usage

> Get an array of common unique values that are included in all given arrays

```js

// async

const { intersetionOf } = require('intersection-of');

intersectionOf([1,2,2,3,4], [2,3,6,7]);
.then((result) => {
  console.log(result); // [2,3]
});


// sync
const { intersectionOfSync }  = require('intersection-of');

let result = intersectionOfSync([1,2,2,3,4], [2,3,6,7]);
console.log(result) // [2,3]

```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
