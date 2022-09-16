const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const app = express();
const user_router = require('./routes/users_route')
dotenv.config()

app.use(cors());

app.use('/home',user_router)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs')

app.listen(process.env.PORT||5000,()=>{
    console.log(`On PORT ${process.env.PORT||5000}`);
})


