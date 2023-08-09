const express = require("express");
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");

const PORT = 8000;
const uri =
  "mongodb+srv://debmalyasen37:mypassword@cluster0.o6majhv.mongodb.net/Cluster0?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("WELCOME TO THE BACKEND OF TRIPMATE WEB APP");
});

app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  console.log(req.body);
  const { email, password } = req.body;

  // unique id generation
  const generateduserId = uuidv4();

  //password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(409).send("user already exists. Please Login");
    }

    const sanitizedEmail = email.toLowerCase();

    const data = {
      user_id: generateduserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };

    const insertedUser = await users.insertOne(data);

    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    });
    res
      .status(201)
      .json({ token, userId: generateduserId, email: sanitizedEmail });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");
    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => console.log("Server running on PORT " + PORT));
