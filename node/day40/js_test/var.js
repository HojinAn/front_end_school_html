var hello = "hello";

var hello = "hello hello";

console.log(hello); //hello hello

function sayHello() {
  var hello = "hello hello hello";
  console.log(hello); // hello hello hello
}

sayHello();

console.log(hello); // hello hello

if (true) {
  console.log(hello); // hello hello
  var hello = "hello hello hello hello";
  console.log(hello); // hello hello hello hello
}

console.log(hello); // hello hello hello hello // var는 function scope만 지원하기 때문
