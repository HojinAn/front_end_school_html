// let result = 0;

// for (let x = 0; x < 101; x++) {
//     // // console.log(x);
//     // if (x % 3 == 0) {
//     //     // console.log(x);
//     //     result += x;
//     // }
//     // if (x % 5 == 0) {
//     //     // console.log(x);
//     //     result += x;
//     // }
//     // if (x % 15 == 0) {
//     //     result -= x;
//     // }
//     if (x % 3 == 0 || x % 5 == 0) {
//         result += x;
//     }
// }

// console.log(result);
//------------------
// let text = '';
// let count = 0;

// for (let i = 0; i < 101; i++) {
//     text += i;
// }

// for (let i = 0; i < text.length; i++) {
//     if (text[i] == '8') {
//         count += 1;
//     }
// }

// console.log(count);
//--------
// let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
// let temp = sample[0];

// for (let i = 0; i < sample.length; i++) {
//     if (temp > sample[i]) {
//         temp = sample[i];
//     }
// }

// console.log(temp);

//------------
let value = [1, 3, 5, 8, 13, 17, 20, 21];
let temp = value[1] - value[0];
let index = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i + 1] - value[i])) {
        temp = value[i + 1] - value[i];
        index = i;
    }
}

console.log(value[index], value[index + 1]);
// 10점 만점에 0점 정도의 코드