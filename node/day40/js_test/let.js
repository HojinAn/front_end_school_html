let hello = "first hello";

if (true) {
  let hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // first hello // let은 block scope 지원
