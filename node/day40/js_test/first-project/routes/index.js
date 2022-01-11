var express = require("express");
var router = express.Router();
const loginCheck = require("../module/loginCheck");

// const loginCheck = (req, res, next) => {
//   const userLogin = true;
//   if (userLogin) {
//     next();
//   } else {
//     res.status(400).json({
//       message: "login fail!",
//     });
//   }
// };
// //  index.js에는 server logic만 만들어줘야 하는데 이렇게 middleware 함수가 들어와있으면 번잡해진다. 따라서 module 폴더로 따로 빼준다.

router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!!",
  });
});

module.exports = router;
