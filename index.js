const express = require("express");
const connectDB = require("./db/db_connection");
const Employee = require("./models/empmodel");
// const app = express();
const port = 3000 || process.env.port;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// connectDB();
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// const express = require("express");
// const connectDB = require("./db/db_connection");
// const Employee = require("./models/employeeModel");

const app = express();

connectDB();

app.use(express.json());

app.post("/employees", async (req, res) => {
  try {
    const { name, email, position, department } = req.body;

    const newEmployee = new Employee({
      name,
      email,
      position,
      department,
    });

    const employee = await newEmployee.save();
    res.json(employee);
  } catch (error) {
    console.log("Error saving Data: ", error);
    res.status(500).send("Server Error");
  }
});

app.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error("Error fetching Employees Data: ", error);
    res.status(500).send("Server Error");
  }
});

app.listen(2000, () => {
  console.log("Server is running on port no 2000");
});
