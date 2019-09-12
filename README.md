การตัดข้อความภาษาไทยโดยไม่นับสระลอยและวรรณยุกต์

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

```
$ npm install --save thai-sentence-cut
```

## Usage

```
const { thaiStringLength, thaiStringSplitByLenth } = require('../src');

const str = "ประโยคยาวๆ ที่ใช้ทดสอบการตัดคำและการนับความยาวของตัวอักขระโดยไม่สนใจสระและวรรณยุกต์ไทย";

console.log(thaiStringLength(s));

// output:
// 76

console.log(thaiStringSplitByLength(s,20));

// output:
// [ 'ประโยคยาวๆ ที่ใช้ทดสอบ',
//   'การตัดคำและการนับความ',
//   'ยาวของตัวอักขระโดยไม่',
//   'สนใจสระและวรรณยุกต์ไทย' ]
```

## Depends
- [wordcut](https://www.npmjs.com/package/wordcut)