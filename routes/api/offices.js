var express = require("express");
var router = express.Router();

const Office = require("../../models/Office");

router.get("/", function (req, res) {
  Office
    .find()
    .then((offices) => res.json(offices))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка офисов" })
    );
});

module.exports = router;
