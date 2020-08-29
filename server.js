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
app.use("/api/product", require("./routes/api/product"));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use("/uploads", express.static("uploads"));

// test

app.get("/", (req, res) => res.send("API RUNNING"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`APPLICATION RUNNING on port ${PORT}`));
