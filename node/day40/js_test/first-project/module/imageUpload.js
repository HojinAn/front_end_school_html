const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
    // cb는 callback 함수를 의미
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: "uploads/" });
// 여기까지만하면 uploads 폴더 안에 암호화된 파일만 저장된다. public images 폴더 안이 아니라 그래서 multer와 upload 사이에 storage 함수를 또 만들어줘야 한다.
module.exports = upload;
