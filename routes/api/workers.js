var express = require("express");
var router = express.Router();

const Worker = require("../../models/Worker");

router.get("/", function (req, res) {
  Worker
    .find()
    .then((workers) => res.json(workers))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка сотрудников" })
    );
});

module.exports = router;
