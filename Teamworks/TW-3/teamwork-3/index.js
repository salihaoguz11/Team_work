const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

const router = express.Router();

// router.get(/\/\/.*hello$/, (req, res) => {
//   res.send("<h1>path matched</h1>");
// });
const students = [
  {
    id: 1,
    name: "Ali",
  },
  {
    id: 2,
    name: "Osman",
  },
];
// console.log(students);

//
app.get("/",(req, res, next) => {
 
    next();
    console.log("1");
});
app.get("/",(req, res, next) => {
    console.log("2");
    next();
  });
  app.get("/",(req, res, next) => {
    console.log("3");
    next();
  });
  app.get("/",(req, res, next) => {
    console.log("4");
    next();
  });

router.get("/students", (req, res) => {
  res.end(JSON.stringify(students));
});
// router.get("/students/:id", (req, res) => {
//   const studentId = parseInt(req.params.id);
//   const student = students.find((student) => student.id === studentId);
//   if (!student) {
//     res.status(404).send("not found");
//   }
//   res.send(student);
// });

app.use(router);
app.listen(8000);
