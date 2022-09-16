const db = require('../connections/db.js')


const getUser = ()=>{
    return db('users')
    .select('id','username','password')
    .returning('*')
}

module.exports = {
    getUser
}



