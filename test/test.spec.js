const expect = require('chai').expect;
const { lengthOfThaiString, splitThaiStringByLength } = require('../src');

const testString =
  'ประโยคยาวๆ ที่ใช้ทดสอบการตัดคำและการนับความยาวของตัวอักขระโดยไม่สนใจสระและวรรณยุกต์ไทย';
const len = lengthOfThaiString(testString);
const splitted = splitThaiStringByLength(testString, 20);

// descript

describe('lengthOfThaiString', () => {
  it('should return number', () => {
    expect(len).to.be.a('number');
  });
  it('should equal to 76', () => {
    expect(len).to.be.eql(76);
  });
});

describe('splitThaiStringByLength', () => {
  it('should return an array', () => {
    expect(splitted).to.be.an('array');
  });
  it('should have length of 4', () => {
    expect(splitted.length).to.be.eql(4);
  });
  it('should have same content when joined', () => {
    expect(splitted.join('')).to.be.equals(testString);
  })
});
