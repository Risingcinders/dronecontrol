require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
// const path = require('path')
// const Gpio = require('onoff').Gpio;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// require("./server/config/mongoose.config");
// require("./server/routes/device.routes")(app);

app.listen(port, () => console.log(`listenin on starboard: ${port}`));

app.post("/api/test", (req, res) => {
    console.log("That was easy.");
    return res.json({msg : "Hello"});
});
