const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
// const knex = require('knex')
const app = express();
const user_router = require('./routes/users_route.js')

dotenv.config()

app.use(cors());

app.use('/',user_router)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs')

app.listen(5000,()=>{
    console.log(`On PORT ${process.env.PORT||5000}`);
})


