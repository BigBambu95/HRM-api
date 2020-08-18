const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

const Salary = require("../../models/Salary");

router.get("/", function (req, res) {
  Salary
    .find({ year: 2020 })
    .then((salaries) => res.json(salaries))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка зарплат" })
    );
});

router.get("/:id", function (req, res) {
  const { month, year } = req.query
  Salary
    .find({ month, year, workerId: objectId(req.params.id) })
    .then((salary) => res.json(salary))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении зарплаты сотрудника" })
    );
});

module.exports = router;
