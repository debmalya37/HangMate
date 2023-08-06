const PORT = 8000;
const express = require("express");
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://debmalyasen37:mypassword@cluster0.o6majhv.mongodb.net/Cluster0?retryWrites=true&w=majority";
const app = express();

app.get("/", (req, res) => {
  res.json("WELCOME TO THE BACKEND OF TRIPMATE WEB APP");
});
app.get("/signup", (req, res) => {
  res.json("WELCOME TO THE BACKEND OF TRIPMATE WEB APP");
});

app.listen(PORT, () => console.log("server running on PORT " + PORT));
