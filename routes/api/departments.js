var express = require("express");
var router = express.Router();

const Department = require("../../models/Department");

router.get("/", function (req, res) {
  Department
    .find()
    .then((departments) => res.json(departments))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка отделов" })
    );
});

module.exports = router;
