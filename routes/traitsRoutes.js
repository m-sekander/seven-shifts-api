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
    .put((req, res) => {
        const traitsList = readTraits();
        traitsList[Object.keys(req.body)[0]] = Object.values(req.body)[0];
        writeTraits(traitsList);
        res.json(traitsList);
    })


module.exports = router;