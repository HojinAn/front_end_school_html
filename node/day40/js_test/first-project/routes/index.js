var express = require("express");
var router = express.Router();

const postModel = require("../model/post");

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });
  try {
    const result = await post.save(); // save는 비동기로 움직인다. 그래서 언제 끝날지 몰라서 문제가 될 수 있으므로 async, await로 해결
    // save하면서 발생할 수 있는 오류를 try, catch를 통해서 handling 가능
    res.status(200).json({
      message: "upload success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await postModel.find({});
    res.status(200).json({
      message: "read success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.findById({ id });
    res.status(200).json({
      message: "detail success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(
      id,
      {
        title: title,
        content: content,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "update success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete success!!",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
