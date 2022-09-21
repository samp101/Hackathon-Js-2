const express = require("express");
const router = express.Router();

const {

  _getAllPost,
  _getSpecificArticle,
  goToCreatePostPage,
  _uploadPostToDb,
  _deletePost,
  _getTitle
} = require("../controller/user_controller.js");

// router.get('/',_searchUser)

router.get("/", _getAllPost);
router.get("/blog/:id", _getSpecificArticle);
router.get("/create-post", goToCreatePostPage);
router.post("/uploadpost", _uploadPostToDb);
router.post("/deletePost/:id", _deletePost);
router.get("/getTitle/:id", _getTitle);

module.exports = router;
