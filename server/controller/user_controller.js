const {
  getUser,
  getPost,
} = require("../modules/user_modules.js");

const _getUser = (req, res) => {
  getUser()
    .then((data) =>{
      // const obj = {users:data} 
      res.render("pages/index",{
        users:data
      })}
    )
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _getPost = (req, res) => {
  getPost()
    .then((data) => {
      data.forEach((element) => {
        element;
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

module.exports = {
  _getUser,
  _getPost,
};
