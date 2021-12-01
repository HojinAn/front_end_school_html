let data = [11, 22, 33, 111, 2];
data = data + ''; // '11,22,33,111,2'
data = data.replace(/,/g, '');//,를 전부 없애주기 위해 정규표현식 사용
data = data.replace(/ /g, '');//빈칸을 전부 없애주기

