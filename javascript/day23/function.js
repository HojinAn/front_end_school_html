// function 함수하나() {
//     let x = 10;
//     console.log('함수하나 호출');
// }
// function 함수둘() {
//     let y = 10;
//     console.log('함수둘 호출');
// }
// 함수하나();

let k = 10;
function viewk() {
    console.log(k);
}
function changek() {
    k += 10;
    console.log(k);
}
viewk();
changek();
viewk();