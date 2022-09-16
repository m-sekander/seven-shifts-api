const express = require("express");
const router = express.Router();

const fs = require("fs");

function readLogin() {
    const loginFile = fs.readFileSync("./data/login.json");
    const loginData = JSON.parse(loginFile);
    return loginData;
}

function writeLogin(login) {
    fs.writeFileSync("./data/login.json", JSON.stringify(login));
}

// router.route("/")
//     .post((req, res) => {
//         const loginList = readLogin();
//         
//          
//     })


module.exports = router;