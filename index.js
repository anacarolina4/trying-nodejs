const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function(req, res) {

    res.sendFile(path.join(__dirname+"/index.html"));
})

router.get("/", function(req, res) {

    res.sendFile(path.join(__dirname+"/views/home.html"));

})

router.get("/", function(req, res) {

    res.sendFile(path.join(__dirname+"/views/game-menu.html"));

})

router.get("/", function(req, res) {

    res.sendFile(path.join(__dirname+"/views/game0.html"));

})

app.use("/", router);
app.listen(process.env.port || 5500);