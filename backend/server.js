const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


require("dotenv").config();

const app = express();
const port = process.env.port || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateindex: true });

const connection = mongoose.connection;

connection.once("open", () =>{
  console.log("you are connceted to your mongo database");
});



const message = require("./routes/message");


app.use("/message", message);


app.listen(port, () => console.log(`your server is running on port: ${port}`));
