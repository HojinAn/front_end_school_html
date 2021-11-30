// array의 각 자리 수의 합 구하기

// hint 문자열로 변환해서 풀어주세요!
const arr1 = [11, 22, 33, 111, 2];
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17

const str_arr = arr1.map(item => {
    return item + '';
});
let str2 = str_arr.join('');

let result = 0;
for (val of str2) {
    result += parseInt(val, 10);
}

console.log(result);