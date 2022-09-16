const express = require('express');
const router = express.Router();
const {_getUser}= require('../controller/user_controller.js')


router.get('/',(req,res)=>{
    res.render('pages/index')

})

router.get('/users',_getUser,(req,res)=>{
})






module.exports = router
