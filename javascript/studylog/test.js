// function reverse(a) {
//     if (a.length == 1) {
//         return a
//     }
//     console.log(a.slice(0, a.length - 1));
//     return a[a.length - 1] + reverse(a.slice(0, a.length - 1))
// }

// console.log(reverse('blackpink'));

// function reverse('blackpink'){

//     console.log('blackpink'.slice(0, 'blackpink'.length-1)); // 'blackpin'
//     return  'k' + reverse('blackpin') = 'k' + 'nipkcalb' = 'knipkcalb'
// }

// function reverse('blackpin'){


//     return  'n' + reverse('blackpi') = 'n' + 'ipkcalb' = 'nipkcalb'
// }

// function reverse('blackpi'){

//     console.log(a.slice(0, a.length-1)); // 'blackp'
//     return  'i' + reverse('blackp') = 'i' + 'pkcalb'
// }'p'


// .anchor...

// reverse 'blac'
// return 'c' + reverse('bla') = 'a' + 'l' + 'b'

// reverse 'bla'
// return 'a' + reverse('bl') = 'a' + 'l' + 'b'

// function reverse('bl'){

//     return  'l' + 'b'

// }

// function reverse('b'){
//     if('b'.length == 1){
//         return 'b'
//     }

// }

// var nums = [100, 200, 300, 400, 500];

// nums.length = 3; // 이렇게하면 slice가 된다!


// console.log(nums);


// let 전교점수 = [
//     // 1반
//     [[10, 20, 30, 40, 50],
//     [20, 30, 40, 50, 60]],
//     // 2반
//     [[10, 20, 30, 40, 50],
//     [20, 30, 40, 50, 60]],
// ];
// let scoreTotal = 0;
// for (cls of 전교점수) {
//     let scoreAvgCls = 0;
//     for (stdnt of cls) {
//         let scoreAvg = 0;
//         for (score of stdnt) {
//             scoreAvg += score;
//         }
//         scoreAvgCls += scoreAvg / stdnt.length;
//     }
//     scoreTotal += scoreAvgCls / cls.length;
// }
// console.log(scoreTotal / 전교점수.length);

let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[15, 25, 35, 45, 55],
    [25, 35, 45, 55, 65]]
];



let avgTotal = 0;
let sumTotal = 0;
//k는 각 반을 loop 도는 것
//1반
// 전교점수 [class1, class2] k
// class [stdnt1, stdnt2] j
// stdnt [과목1, 과목2, 과목3, 과목4, 과목5] i

for (let k = 0; k < 전교점수.length; k++) {
    let avgClass = 0;
    let sumClass = 0;
    for (let j = 0; j < 전교점수[k].length; j++) {
        let avgStdnt = 0;
        let sumEachStdnt = 0;
        for (let i = 0; i < 전교점수[k][j].length; i++) {
            sumEachStdnt += 전교점수[k][j][i];
        }
        avgStdnt = sumEachStdnt / 전교점수[k][j].length;
        sumClass += avgStdnt;
    }
    avgClass = sumClass / 전교점수[k].length;
    sumTotal += avgClass;
}
avgTotal = sumTotal / 전교점수.length;
console.log(avgToal)