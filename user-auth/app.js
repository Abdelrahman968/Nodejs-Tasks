import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import memberSchema from "./models/users.js";

const app = express();
const port = 8000;

mongoose
  .connect(
    "mongodb+srv://seabdelrahman968:OublQOC0osuc0aAD@cluster0.lyrwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log(`Connected Successfully`);
  })
  .catch((error) => {
    console.log(`Error with DB`, error);
  });

app.use(express.json());

app.get("/allUsers", async (req, res) => {
  const data = await memberSchema.find();
  res.json({ message: data });
});

app.delete("/removeUser/:userID", async (req, res) => {
  const userID = req.params.userID;
  const data = await memberSchema.findByIdAndDelete(userID);
  res.json({ message: data });
});
app.put("/updateUser/:userID", async (req, res) => {
  const updateData = req.body;
  const userID = req.params.userID;
  const data = await memberSchema.findByIdAndUpdate(userID, updateData, {
    new: true,
  });
  if (!data) {
    return res.status(404).json({ message: "user not found" });
  }

  res.json({ message: data });
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUserName = await memberSchema.findOne({ username });
    const existingEmail = await memberSchema.findOne({ email });

    if (existingUserName || existingEmail) {
      return res.status(400).send({ message: "User Already Exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new memberSchema({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUserName = await memberSchema.findOne({ username });
    const existingEmail = await memberSchema.findOne({ email });

    if (!existingUserName || !existingEmail) {
      return res
        .status(400)
        .send({ message: "This Email/UserName Doesn't Exist" });
    }
    const passwordMatch = await bcrypt.compare(
      password,
      existingEmail.password
    );
    if (passwordMatch) {
      res.status(200).send("Logged in successfully!");
    } else {
      res.status(400).send("Wrong Email or Password");
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`server is up at: http://localhost:${port}`);
});
