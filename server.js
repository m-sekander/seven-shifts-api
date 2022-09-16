require("dotenv").config();
const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const applicantsRoutes = require("./routes/applicantsRoutes");
app.use("/applicants", applicantsRoutes);

const employeesRoutes = require("./routes/employeesRoutes");
app.use("/employees", employeesRoutes);

const loginRoutes = require("./routes/loginRoutes");
app.use("/login", loginRoutes);

const traitsRoutes = require("./routes/traitsRoutes");
app.use("/traits", traitsRoutes);

app.listen(PORT, () => {
  console.log("Backend server is running at port:" , PORT);
});