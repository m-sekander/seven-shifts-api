const express = require("express");
const router = express.Router();

const fs = require("fs");

function readApplicants() {
    const applicantsFile = fs.readFileSync("./data/applicants.json");
    const applicantsData = JSON.parse(applicantsFile);
    return applicantsData;
}

function readTraits() {
    const traitsFile = fs.readFileSync("./data/traits.json");
    const traitsData = JSON.parse(traitsFile);
    return traitsData;
}

function writeApplicants(applicants) {
    fs.writeFileSync("./data/applicants.json", JSON.stringify(applicants));
}

router.route("/")
    .get((req, res) => {
        const applicantsList = readApplicants();
        const applicantsTraits = [];
        for (applicant of applicantsList) {
            const traits = applicant.traits;
            const splitTraits = traits.split("'");
            const traitWords = [];
            for (let i=0; i<splitTraits.length; i++) {
                if (i % 2 === 1) {
                    traitWords.push(splitTraits[i]);
                }
            }
            applicantsTraits.push(traitWords);
        }

        const traitsList = readTraits();
        const applicantsScores = [];
        for (applicant of applicantsTraits) {
            let scoreSum = 0;
            for (trait of applicant) {
                scoreSum += traitsList[trait]
            }
            applicantsScores.push(Math.round(scoreSum / applicant.length));
        }

        let result = [];
        for (let i=0; i<applicantsList.length; i++) {
            result.push({name: applicantsList[i].fullName, score: applicantsScores[i]});
        }

        result = result.sort((a, b) => {
            return b.score - a.score
        })
        
        res.json(result);
    })


module.exports = router;