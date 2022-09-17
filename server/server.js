const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const knex = require("knex");
const router = require("./routes/users_route.js");

dotenv.config();

const app = express();

app.set("view engine", "ejs");

app.use(cors());

app.use("/", router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `On PORT ${process.env.PORT || 5000}`
  );
});

app.get("/shop", (req, res) => {
  const products = [
    { id: 1, name: "iPhone", price: 800 },
    { id: 2, name: "iPad", price: 700 },
    { id: 3, name: "iWatch", price: 600 },
  ];
  res.render("pages/users", {
    title: "Shop with EJS is fun",
    data: products,
  });
});

// function getUsers(){
//     fetch('http://localhost:5000/api/products')
//     .then(res=>{
//       if(res.status == 404){

//       }
//       res.json()
//     })
//     .then(data=>{
//       render(data);
//     })
//   }
//   getUsers();

//   function render(arr){
//     const root = document.getElementById('root');
//     root.innerHTML = '';
//     arr.forEach((item, i) => {
//       const div = document.createElement('div');
//       const h2 = document.createElement('h2');
//       h2.innerText = item.name
//       div.appendChild(h2)
//       const h4 = document.createElement('h4');
//       h4.innerText = item.price
//       div.appendChild(h4)
//       root.appendChild(div)
//     });
//   }
