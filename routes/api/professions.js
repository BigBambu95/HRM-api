var express = require("express");
var router = express.Router();

const Profession = require("../../models/Profession");

router.get("/", function(req, res) {
  Profession
    .find()
    .then((professions) => res.json(professions))
    .catch((err) => 
      res.status(404).json({ message: "Ошибка при получении списка профессий" })
    )
});

module.exports = router;
