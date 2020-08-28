const express = require("express");
const app = express();

// database
const connectDB = require("./config/db");
connectDB();

// body parser included with express, init mdddiel

app.use(express.json({ extended: false }));

// setting api's routes

app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));

// test

app.get("/", (req, res) => res.send("API RUNNING"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`APPLICATION RUNNING on port ${PORT}`));
