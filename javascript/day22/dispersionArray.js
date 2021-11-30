// 분산 => (각 값 - 평균) **2
const arr1 = [10, 20, 30, 10, 20, 30, 40, 10];

let temp = 0;
for (value of arr1) {
    temp += value;
}
const avg = temp / arr1.length;
let disp = 0;
for (val of arr1) {
    disp += (val - avg) ** 2;
}

console.log(disp / arr1.length);