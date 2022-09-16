const {getUser,getPost} = require('../modules/user_modules.js')

let product = [
  {username:'shmuel',password:10},
  {username:'shmuel',password:10},
]
const _getUser = (req,res) => {
    getUser()
    .then(data=>
      //  console.log(data)
      res.render('pages/index',{
        title:data
      })
    )
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
    })
  }

const _getPost = (req,res) => {
    getPost()
    .then(data=>{
      data.forEach(element => {
       console.log(element);
    }) 
  })
    .catch(e => {
      console.log(e);
      res.status(404).json({msg:'not found'})
    })
  }



module.exports = {
    _getUser,
    _getPost
}
