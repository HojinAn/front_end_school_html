const express = require("express");
const router = express.Router();

router.get("/ejs", (req, res) => {
  res.render("template", { data: "test data" });
  // 이렇게 적으면 template.ejs 파일에 해당 객체를 보내준다고 생각하면 됨
});

module.exports = router;
