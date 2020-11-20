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

let redLED = new Gpio(21, "out");
let greenLED = new Gpio(14, "out");
let blueLED = new Gpio(13, "out");

let redState = false;
app.get("/api/red", (req, res) => {
    redState = !redState;
    redState ? redLED.writeSync(1) : redLED.writeSync(0);
    console.log(redState);
    return res.json({ msg: redState ? "The red light is on" : "The red light is off" });
});

let greenState = false;
app.get("/api/green", (req, res) => {
    greenState = !greenState;
    greenState ? greenLED.writeSync(1) : greenLED.writeSync(0);
    console.log(greenState);
    return res.json({ msg: greenState ? "The red light is on" : "The red light is off" });
});

let blueState = false;
app.get("/api/blue", (req, res) => {
    blueState = !blueState;
    blueState ? blueLED.writeSync(1) : blueLED.writeSync(0);
    console.log(blueState);
    return res.json({ msg: blueState ? "The red light is on" : "The red light is off" });
});
