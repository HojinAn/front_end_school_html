function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let lottoArr = [];
function makeLottoSet() {
    lottoArr.push(randomNum(1, 46));
    let lottoSet = new Set(lottoArr);
    if (lottoSet.size < 6) { return makeLottoSet() }
    return [...lottoSet].sort((a, b) => a - b);
}
console.log(`당첨번호 : ${makeLottoSet()}`);

function makeLottoSet2() {
    let lottoSet = new Set();
    while (lottoSet.size < 6) {
        lottoSet.add(randomNum(1, 46));
    }
    return [...lottoSet].sort((a, b) => a - b);
}
console.log(`당첨번호 : ${makeLottoSet2()}`);