// callback 지옥을 벗어나기 위한 promise
function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = "Hello Hello";
    resolve(hello);
    // resolve(성공) 시 괄호 내 data를 넘긴다.
    //////////////////////////
    // reject를 통해 error handling 해준다.
    // reject(new Error());
  });
}

// sayHello()
//   .then((resolveData) => {
//     // sayHello가 호출되면서 Promise가 가동
//     // 넘어온 console.log와 상수 hello가 resolveData로 넘어온다.
//     // console.log(resolveData);
//     console.log(resolveData); // console.log 발생
//     return resolveData;
//   })
//   // then으로 이어붙여 줄 때 다음 then이 data를 받으려면 앞의 then에서 resolveData와 같은 data를 반환해줘 다음 then의 매개변수로 간다.
//   .then((resolveData) => {
//     console.log(resolveData);
//     return resolveData;
//   })
//   .then((resolveData) => {
//     console.log(resolveData);
//   })
//   .catch((error) => {
//     console.log(error);
//     // Promise 내 reject로 넘어온 error 실행
//   });

// 하지만 이런 then 자체도 너무 많아지면 then 자체도 복잡해지는 문제가 있다. 이 때 필요한 것이 async, await
///////////////////////////////////
async function test() {
  const hello1 = await sayHello();
  // sayHello의 실행값을 hello1에 초기화된다. Promise 자체가 비동기로 움직이기 때문에 만약 await를 작성하지 않으면 밑에 있는 코드들이 바로 실행 될 수 있다. sayHello()보다. 그래서 sayHello() 밑에 있는 코드들이 sayHello보다 나중에 실행 되게 하려고 한다면 await를 붙여줘야 하고 await를 붙이려면 함수 앞에 async도 붙여줘야 한다.
  console.log(hello1);
}
test();
