// 손코딩 1번
fetch('https://블라블라.json').then(function (response) {
    console.log(1);
    return response.json();
}).then(function (json) {
    console.log(2);
    console.log(json);
    return json;
}).then(function (json) {
    console.log(3);
    console.log(json.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종퍼센트']));
    return
})

// 손코딩 2번
new Promise(function (resolve, reject) {

    setTimeout(() => reject('error'), 1000);

}).then(function (result) {

    alert(result + ' : 잘 수행!');
    return result + 'one';

}).catch(function (result) {

    alert(result + ' : 에러 발생!');
    return result + 'two';
}).then(function (result) {

    alert(result + ' : 잘 수행!');
    return result + 'three';

});