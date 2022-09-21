const express = require("express");
const router = express.Router();

const {
  _getUser,
  _getAllPost,
  _getSpecificArticle,
  goToCreatePostPage,
  _uploadPostToDb,
  _deletePost,
} = require("../controller/user_controller.js");

// router.get('/',_searchUser)

router.get("/users", );
router.get("/", _getAllPost);
router.get("/blog/:id", _getSpecificArticle);
router.get("/create-post", goToCreatePostPage);
router.post("/uploadpost", _uploadPostToDb);
router.post("/deletePost/:id", _deletePost);

module.exports = router;
