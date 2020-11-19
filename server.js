require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
// const path = require('path')
const Gpio = require("onoff").Gpio;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// require("./server/config/mongoose.config");
// require("./server/routes/device.routes")(app);

app.listen(port, () => console.log(`listenin on starboard: ${port}`));

let LED = new Gpio(21, "out");
let powerstate = false;

app.post("/api/test", (req, res) => {
    powerstate = !powerstate;
    powerstate ? LED.writeSync(1) : LED.writeSync(0);
    console.log(powerstate);
    return res.json({ msg: "Hello" });
});
