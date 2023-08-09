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

// Define your JWT secret here
const JWT_SECRET = "your_jwt_secret_key";

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
      return res.status(409).send("User already exists. Please login.");
    }

    const sanitizedEmail = email.toLowerCase();

    const data = {
      user_id: generateduserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };

    await users.insertOne(data);

    const token = jwt.sign(
      { user_id: generateduserId, email: sanitizedEmail },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

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

// ... (other routes)

app.listen(PORT, () => console.log("Server running on PORT " + PORT));
