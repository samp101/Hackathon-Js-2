const express = require("express");
const router = express.Router();

const {
  _getUser,
  _getAllPost,
  _getSpecificArticle,
  goToCreatePostPage,
} = require("../controller/user_controller.js");

// router.get('/',_searchUser)

router.get("/users", );
router.get("/", _getAllPost);
router.get("/blog/:id", _getSpecificArticle);
router.get("/create-post", goToCreatePostPage);

module.exports = router;
