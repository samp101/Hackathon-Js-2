
  let blogTitle = document.querySelector('#blog-title') 
  let blogAuthor = document.querySelector('#blog-author') 
  let blogCatgory = document.querySelector('#blog-category') 
  let blogPost = document.querySelector('#blog-post') 
  
function createPost(e){
      
    e.preventDefault()
    blogTitleVal = blogTitle.value
    blogAuthorVal = blogAuthor.value
    blogCatgoryVal = blogCatgory.value
    blogPostVal = blogPost.value

    fetch('/upload-post',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            "user_id": 1,
            blogTitleVal,
            blogCatgoryVal,
            blogPostVal,
            "img_url":"dsaad",
    "date_created":"2022-09-19"


            // (new Date ()).toLocaleDateString ("fr-CA"), 
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);;
    })
    .catch(err=>console.log(err))
}


let bob ={
    "user_id": 1,
    "title":"How to play bass gutair",
    "category":"entertainment",
    "post":"dadssa",
    "img_url":"dsaad",
    "date_created":"2022-09-19"
}
{
    user_id: 1,
    title: blogTitleVal,
    category:blogCatgoryVal,
    post: blogPostVal,
    img_url: "https://picsum.photos/id/1/300",
    date_created: (new Date ()).toLocaleDateString ("fr-CA"), 
}


let blogTitle = document.querySelector('#blog-title') 
let blogAuthor = document.querySelector('#blog-author') 
let blogCatgory = document.querySelector('#blog-category') 
let blogPost = document.querySelector('#blog-post') 

function createPost(e){

  e.preventDefault()
  blogTitleVal = blogTitle.value
  blogAuthorVal = blogAuthor.value
  blogCatgoryVal = blogCatgory.value
  blogPostVal = blogPost.value

  let newPost = {
      user_id: 1,
      title: blogTitleVal,
      category:blogCatgoryVal,
      post: blogPostVal,
      img_url: "https://picsum.photos/id/1/300",
      date_created: (new Date ()).toLocaleDateString ("fr-CA") 
  }
  body:JSON.stringify(newPost)

  fetch('/uploadpost',{

      method:'POST',
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(newPost)
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
  .catch(err=>console.log(err,'dsasa'))
    
  
}
