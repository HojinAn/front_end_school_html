// http 패키지를 사용하겠다는 코드 require는 해당 package를 불러와 사용할 수 있도록 하고 있다.
const http = require("http");

http
  .createServer((req, res) => {
    // // header 값을 추가해서 보내준다고 생각하면 된다. 상태코드(200과 같은), 어떤 type인지도 보내게 된다.
    // res.writeHead(200, { "Content-Type": "text/html" });
    // // 응답 보낼 code 작성
    // res.end("<p>Hello World!</p>");
    if (req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404);
      res.end("Not found!");
    }
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료");
  });
