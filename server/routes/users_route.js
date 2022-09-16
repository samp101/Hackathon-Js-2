const express = require('express');
const router = express.Router();
const {_getUser, _searchUser,_, _getPost}= require('../controller/user_controller.js')

// console.log(_getUser());

// router.get('/',_searchUser)

router.get('/users',_getUser)
router.get('/',_getPost)





module.exports = router
