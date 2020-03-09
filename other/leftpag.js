function leftpad(str, length, ch) {
  if (!ch && ch !== 0) {
    ch = " ";
  }
  let len = length - str.length;
  return ch + Array(len).join(ch) + str;
}

console.time("leftpad");
console.log(leftpad("hello", 10, 0));
console.timeEnd("leftpad");

function leftpad1(str, length, ch) {
  let len = length - str.length;

  // 二分法
  let total = "";

  while (len) {
    if (len % 2 == 1) {
      total += ch;
    }

    if (len === 1) {
      return total + str;
    }

    ch += ch;
    len = parseInt(len / 2);
  }
}
/**
 * len     5   2     1
 * total  ""  "0"   "0"
 * ch     "0" "00"  "0000"
 */

console.time("leftpad1");
console.log(leftpad1("hello", 10, "0"));
console.timeEnd("leftpad1");

function leftpad2(str, length, ch) {
  let len = length - str.length;

  let total = "";
  while (len) {
    if (len & 1) {
      total += ch;
    }

    if (len === 1) {
      return total + str;
    }

    ch += ch;
    len = len >> 1;
  }
}

console.time("leftpad2");
console.log(leftpad2("hello", 10, "0"));
console.timeEnd("leftpad2");
