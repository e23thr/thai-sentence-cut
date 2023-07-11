const expect = require("chai").expect;
import { lengthOfThaiString, splitThaiStringByLength } from "../src/index";
// const { lengthOfThaiString, splitThaiStringByLength } = require("../src");

const testString =
  "ประโยคยาวๆ ที่ใช้ทดสอบการตัดคำและการนับความยาวของตัวอักขระโดยไม่สนใจสระและวรรณยุกต์ไทย";
const testStringMultiline: string =
  "ประโยคยาวๆ\nที่ใช้ทดสอบ\nการตัดคำและการนับความยาวของตัวอักขระโดยไม่สนใจสระและวรรณยุกต์ไทยของเรา";

const testStringWithSpecialChar = "ทดสอบภาษาไทย (ตัวอย่าง)";

const len = lengthOfThaiString(testString);
const splitted = splitThaiStringByLength(testString, 20);
const multiLineSplitted = splitThaiStringByLength(testStringMultiline, 20);
const splittedWithSpecialChars = splitThaiStringByLength(
  testStringWithSpecialChar,
  10
);

console.log(splittedWithSpecialChars);
describe("lengthOfThaiString", () => {
  it("should return number", () => {
    expect(len).to.be.a("number");
  });
  it("should equal to 76", () => {
    expect(len).to.be.eql(76);
  });
});

describe("splitThaiStringByLength", () => {
  it("should return an array", () => {
    expect(splitted).to.be.an("array");
  });
  it("should have length of 4", () => {
    expect(splitted.length).to.be.eql(4);
  });
  it("should have same content when joined", () => {
    expect(splitted.join("")).to.be.equals(testString);
  });
});

describe("splitThaiStringByLength with multi-line string", () => {
  it("should return an array", () => {
    expect(multiLineSplitted).to.be.an("array");
  });
  it("should have length of 6", () => {
    expect(multiLineSplitted.length).to.be.eql(6);
  });
});

describe("Test string with special character", () => {
  it("should return an array", () => {
    expect(splittedWithSpecialChars).to.be.an("array");
  });
  it("should have length of 3", () => {
    expect(splittedWithSpecialChars.length).to.be.eql(3);
  });
});
