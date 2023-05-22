การตัดข้อความภาษาไทยโดยไม่นับสระลอยและวรรณยุกต์

<img src="https://img.shields.io/badge/dynamic/json?label=version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fporpldev%2Fthai-sentence-cut%2Fmaster%2Fpackage.json" alt="version"> <img src="https://img.shields.io/badge/dynamic/json?label=license&query=license&url=https%3A%2F%2Fraw.githubusercontent.com%2Fporpldev%2Fthai-sentence-cut%2Fmaster%2Fpackage.json" alt="version"> <img src="https://img.shields.io/codecov/c/github/porpldev/thai-sentence-cut" alt="code coverage">

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

```
$ npm install --save @praphan.o/thai-sentence-cut
```

## Usage

```
const { lengthOfThaiString, splitThaiStringByLength } = require('../src');

const str = "ประโยคยาวๆ ที่ใช้ทดสอบการตัดคำและการนับความยาวของตัวอักขระโดยไม่สนใจสระและวรรณยุกต์ไทย";

console.log(lengthOfThaiString(s));

// output:
// 76

console.log(splitThaiStringByLength(s,20));

// output:
// [ 'ประโยคยาวๆ ที่ใช้ทดสอบ',
//   'การตัดคำและการนับความ',
//   'ยาวของตัวอักขระโดยไม่',
//   'สนใจสระและวรรณยุกต์ไทย' ]
```

## Depends

- [wordcut](https://www.npmjs.com/package/wordcut)

## Update

- 1.1.0 splitThaiStringByLength can split multi-line string (string with new line character)
- 1.1.1 update correct version
- 1.1.2 update dependencies to avoid vulnerabilities
- 1.1.3 just update readme (sorry for this)
- 1.1.4 update repository url
- 1.1.5 update dependencies
- 1.1.6 typescript support