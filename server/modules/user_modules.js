const db = require('../connections/db.js')


const getUserSpecific = (query)=>{
    return db('users')
    .select('id','username','password')
    .where({'username':`${query}`})
    .returning('*')
}

const getUser = ()=>{
    return db('users')
    .select('id','username','password')
    .orderBy('username')
    .returning('*')
}
const getPost = () => {
    return db('post')
    .select('user_id','post','date')
    .returning('*')
  }

module.exports = {
    getUser,
    getPost
}



