var wordcut = require('wordcut');
var uncountedCharacter =
  '\u0e31\u0e34\u0e35\u0e36\u0e37\u0e38\u0e39\u0e47\u0e48\u0e49\u0e4a\u0e4b\u0e4c\u0e4d';
var specialCharSplit = '\u0000'; // null byte
wordcut.init();
var regEx = new RegExp('[' + uncountedCharacter + ']', 'g');
var thaiStringLength = function(str) {
  return str.replace(regEx, '').length;
};

var thaiStringSplitByLenth = function(str, maxLength) {
  if (!maxLength) {
    return str;
  }
  let wc = wordcut.cut(str, specialCharSplit).split(specialCharSplit);
  let temp = wc.shift();
  let previous = '';
  let result = [];
  while (wc.length > 0) {
    if (temp.replace(regEx, '').length < maxLength) {
      previous = temp;
      temp = temp + wc.shift();
    } else {
      result.push(previous);
      temp = temp.replace(new RegExp(previous), '');
      previous = '';
    }
  }
  if (temp !== '') {
    result.push(temp);
  }
  return result;
};

module.exports = {
  uncountedCharacter,
  thaiStringLength,
  thaiStringSplitByLenth
};
