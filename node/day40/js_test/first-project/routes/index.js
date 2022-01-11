var express = require("express");
var router = express.Router();

let arr = [];

// GET method

router.get("/read", (req, res) => {
  res.status(200).json({
    message: "read success",
  });
});

// POST method

router.post("/create", (req, res) => {
  // const data = req.body.data;
  const { data } = req.body; // 위랑 같은 코드 비구조화 할당
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr,
  });
  // console.log(req.body);
  // // postman에서 send해주면 Body에 raw JSON으로 작성한 object가 console로 찍힌다.
});

// PUT method

// update/0
// update/2 // 이런식으로

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  });
});

// DELETE method

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  });
});

module.exports = router;
