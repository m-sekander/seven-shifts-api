const express = require("express");
const router = express.Router();

const fs = require("fs");

function readEmployees() {
    const employeesFile = fs.readFileSync("./data/employees.json");
    const employeesData = JSON.parse(employeesFile);
    return employeesData;
}

function writeEmployees(employees) {
    fs.writeFileSync("./data/employees.json", JSON.stringify(employees));
}

router.route("/")
    .get((req, res) => {
        const employeesList = readEmployees();
        res.json(employeesList);
    })


module.exports = router;