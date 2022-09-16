const express = require("express");
const router = express.Router();


const fs = require("fs");

function readEmployees() {
    const employeesFile = fs.readFileSync("./data/employees2.json");
    const employeesData = JSON.parse(employeesFile);
    return employeesData;
}

function writeEmployees(allEmployees) {
    fs.writeFileSync("./data/employees2.json", JSON.stringify(allEmployees));
}

router.route("/")
    .get((_req, res) => {
        const employeesList = readEmployees();
        console.log(employeesList);
        res.status(200).json(employeesList);
    })
    .post((req, res) => {
        const allEmployees = readEmployees();
        
        const foundEmployee = allEmployees.find(employee => employee.name === req.body.name);
        const indexOfEmployee = allEmployees.indexOf(foundEmployee);
        allEmployees.splice(indexOfEmployee, 1);

        foundEmployee.days.day3 = [{day:req.body.day ,timeslot:req.body.timeslot ,type: req.body.type}]
        allEmployees.push(foundEmployee);

        writeEmployees(allEmployees);
        console.log("it posts");

        res.status(201);


    })


module.exports = router;