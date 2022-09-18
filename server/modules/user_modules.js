const db_blog = require("../connections/db.js");

// const getUserSpecific = (query)=>{
//     return db('users')
//     .select('id','username','password')
//     .where({'username':`${query}`})
//     .returning('*')
// }

const getUser = () => {
  return db_blog("users")
    .select("id", "user_name", "password")
    .orderBy("user_name");
};
const getAllPost = () => {
  return db_blog("posts").select(
    "id",
    "title",
  );

};
const getSpecificArticle = (post_id) => {
  return db_blog("posts").select(
    "id",
    "user_id",
    "title",
    "category",
    "post",
    "img_url",
    "date_created"
  )
  .where({id:post_id})

};

module.exports = {
  getUser,
  getAllPost,
  getSpecificArticle,
  
}
