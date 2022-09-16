const express = require('express');
const router = express.Router();
const {users} = require('../modules/user_modules.js')


router.get('/',(req,res)=>{
    res.render('pages/index')
})

const arr = []
router.get('/users',(req,res)=>{
    arr.push(users)
    res.json(users)
    // res.render(users)
})






module.exports = router
