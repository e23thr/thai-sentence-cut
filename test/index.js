const { thaiStringLength, thaiStringSplitByLenth } = require('../src');

const s = "ประโยคยาวๆ ที่ใช้ทดสอบการตัดคำและการนับความยาวของตัวอักขระโดยไม่สนใจสระและวรรณยุกต์ไทย"
console.log(thaiStringLength(s));
console.log(thaiStringSplitByLenth(s,20))

