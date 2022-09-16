const express = require("express");
const router = express.Router();

const fs = require("fs");

function readApplicants() {
    const applicantsFile = fs.readFileSync("./data/applicants.json");
    const applicantsData = JSON.parse(applicantsFile);
    return applicantsData;
}

function writeApplicants(applicants) {
    fs.writeFileSync("./data/applicants.json", JSON.stringify(applicants));
}

router.route("/")
    .get((req, res) => {
        const applicantsList = readApplicants();
        res.json(applicantsList);
    })


module.exports = router;