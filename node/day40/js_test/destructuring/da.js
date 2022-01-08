const object = { a: 1, b: 2, c: 3 };

const { b, a, d } = object;

console.log(a); // key a 따라 value 1 저장
console.log(b); // key b 따라 value 2 저장
console.log(d); // undefined

const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);
