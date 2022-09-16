const {getUser} = require('../modules/user_modules.js')


const _getUser = (req,res) => {
    getUser()
    .then(data=>{
      JSON.stringify(data)
      console.log(data);
      return data
    })
    // .then(data=>console.log(data))
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
    })
  }





module.exports = {
    _getUser
}
