const fs = require('fs');

// rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1
// let 변수 = '이호준' // 사용자 이름
// let 날짜 = new Date()
// fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
//     console.log(err);
// })

// 2
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 3
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 4
// fs.writeFile('./test2.txt', 'hello world 2', (err) => {
//     console.log(err)
// });

// 5
// fs.appendFile('./test2.txt', 'hello world 3', (err)=>{
//     console.log(err)
// });

// 6
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err)
// });

// 7
// fs.mkdir('./yoyo', (err) => {
//     console.log(err)
// });

fs.readFile('./username.csv', 'utf8', (err, data) => {
    let arr2 = [];
    let arr1 = data.split('\n').map(a => a.split(', '));
    for (let i = 1; i < arr1.length; i++) {
        let obj1 = {};
        for (let j = 0; j < arr1[i].length; j++) {
            obj1[arr1[0][j]] = arr1[i][j];
        }
        arr2.push(obj1);
    }
    for (el of arr2) {
        fs.mkdir(el.Username, (err) => {
            console.log(err)
        });

        fs.writeFile(`./${el.Username}`, JSON.stringify(el), (err) => {
            console.log(err)
        });
    }
})
// fs.mkdir()