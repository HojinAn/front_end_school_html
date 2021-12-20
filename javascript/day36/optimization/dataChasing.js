const aespa = ["카리나", "윈터", "지젤", "닝닝"];

// aespa.forEach((item, index) => {
//     aespa[index] = item + '💖'
// });

const aespa2 = aespa.map((item) => {
    return item + '💖'
});
// const aespa2 = aespa.map((item) => item + 💖;); // 이렇게 쓰면 return 안써도 되는데 별로임. 코드는 분명히 써주자

console.log(aespa);
console.log(aespa2);