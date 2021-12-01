// 콤마 찍기 1
// 정규표현식 이용
const n = 12345.6789;
const comma = n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
//내장함수 이용
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
    reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
    if (count < 2) {
        sample += reverse[i];
        ++count;
    } else {
        sample += reverse[i];
        sample += ','
        count = 0;
    }
}
console.log(sample);