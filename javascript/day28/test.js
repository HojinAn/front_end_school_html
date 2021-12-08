fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        return json
    }).then(function (arr) {
        console.log(arr.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종 퍼센트']));
        return
    })