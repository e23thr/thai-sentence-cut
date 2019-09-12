const { lengthOfThaiString, splitThaiStringByLength } = require('../src');

const s = "ประโยคยาวๆ ที่ใช้ทดสอบการตัดคำและการนับความยาวของตัวอักขระโดยไม่สนใจสระและวรรณยุกต์ไทย"
console.log(lengthOfThaiString(s));
console.log(splitThaiStringByLength(s,20))

