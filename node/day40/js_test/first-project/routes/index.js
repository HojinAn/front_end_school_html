var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router get으로 "/"" 요청 받고 콜백 함수로 req, res, next 처리
// routing의 시작은 router

router.post("/main", (req, res) => {
  // res.json({
  //   message: "success!!!",
  // });
  // console.log(req.body);
  // const data = req.body.data;
  // res.send("문자열이 응답됩니다!");
  res.render("index");
});

module.exports = router;
