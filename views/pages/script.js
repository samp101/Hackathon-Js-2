

const username = document.querySelector('#uName')
const pword = document.querySelector('#password')

function login(e){
    e.preventDefault()
    alert('he;;0')
    username = username.value
    pword = pword.value

    fetch('/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({username,pword})
      })
    .then(res=res.json())
    .then(data=>console.log(data))

}
