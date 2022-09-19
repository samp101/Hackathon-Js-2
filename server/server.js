const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const knex = require("knex");
const router = require("./routes/users_route.js");


dotenv.config();

const app = express();

app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/", router);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `On PORT ${process.env.PORT || 5000}`
  );
});
