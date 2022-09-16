const express = require("express");
const router = express.Router();

const fs = require("fs");

function readTraits() {
    const traitsFile = fs.readFileSync("./data/traits.json");
    const traitsData = JSON.parse(traitsFile);
    return traitsData;
}

function writeTraits(traits) {
    fs.writeFileSync("./data/traits.json", JSON.stringify(traits));
}

router.route("/")
    .get((req, res) => {
        const traitsList = readTraits();
        res.json(traitsList);
    })


module.exports = router;