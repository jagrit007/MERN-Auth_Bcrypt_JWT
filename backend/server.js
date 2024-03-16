const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/Users");
require('dotenv').config();

// Secret key
const SECRET_KEY = "some-random-secret-key-that-goes-here";

// Initialize Express App
const app = express();

// Initialize and Connect MongoDB
const DB_URI = process.env.MONGO_DB_URI;
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(3000, ()=>{
        console.log("App started on port 3000\nConnected to MongoDB.");
    });
}).catch((err)=>{
    console.error("Unable to connect to MongoDB!", err);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes

app.post( "/register", async (req, res) => {
    try {
        const {email, username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({email, password:hashedPassword, username});
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Error registering the user!" });
    }
});

app.get("/register", async (req, res)=>{
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ error: "Unable to fetch users from database" });
    }
});


app.post("/login", async (req, res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({ username });
        if(!user){
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ userID: user._id }, SECRET_KEY, {expiresIn: '1hr'});
        return res.status(201).json({ message: "User logged in successfully!" });
    } catch (error) {
        return res.status(401).json({ error: "Error logging in!"});
    }
})