let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
];
let scoreTotal = 0;
for (cls of 전교점수) {
    let scoreAvgCls = 0;
    for (stdnt of cls) {
        let scoreAvg = 0;
        for (score of stdnt) {
            scoreAvg += score;
        }
        scoreAvgCls += scoreAvg / stdnt.length;
    }
    scoreTotal += scoreAvgCls / cls.length;
}
console.log(scoreTotal / 전교점수.length);