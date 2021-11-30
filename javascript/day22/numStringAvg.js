// String 안의 숫자 평균 구하기 문제
const str1 = '5, 4, 10, 2, 5';
const arr1 = str1.split(', ');
let result = 0;
for (value of arr1) {
    value = parseInt(value, 10);
    result += value;
}
console.log(result / arr1.length);