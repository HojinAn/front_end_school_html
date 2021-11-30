// 문자열 뒤집기 문제
let s = 'hello world';
let temp = '';
for (let i = 0; i < s.length; i++) {
    temp = s[i] + temp;
}