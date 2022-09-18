const {
  getUser,
  getAllPost,
  getSpecificArticle
} = require("../modules/user_modules.js");

const _getUser = (req, res) => {
  getUser()
    .then((data) =>{
      // const obj = {users:data} 
      res.render("pages/users",{
        users:data
      })}
    )
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _getAllPost = (req, res) => {
  
 
  getAllPost()
    .then((data) => {
       
      res.render("pages/index",{
        users:data
      })}
    )
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _getSpecificArticle = (req, res) => {
  let id = req.params.id
  id = Number(id)
  console.log('id',typeof id, id);
  getSpecificArticle(id)
    .then((data) => {
      res.render("pages/blog-article",{
        users:data
      })}
    )
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};


const goToCreatePostPage = (req,res) =>{
  res.render( res.render("pages/create-post"))
}
module.exports = {
  _getUser,
  _getAllPost,
  _getSpecificArticle,
  goToCreatePostPage
};
