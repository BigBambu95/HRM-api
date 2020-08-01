var express = require("express");
var router = express.Router();

const Vacancy = require("../../models/Vacancy");
const Candidate = require("../../models/Candidate");
const VacancyTemplate = require("../../models/Vacancy-template");

router.get("/", function (req, res) {
  Vacancy
    .find()
    .then((vacancies) => res.json(vacancies))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка вакансий" })
    );
});

router.get("/templates", function(req, res) {
  VacancyTemplate
    .find()
    .then((templates) => res.json(templates))
    .catch((err) => 
      res.status(404).json({ message: "Ошибка при получении шаблонов вакансий" })
    )
});

router.get("/:id", function(req, res) {
  Vacancy
    .findById(req.params.id)
    .then((vacancy) => {
      Candidate
        .find({ _id: vacancy.candidates })
        .then((candidates) => {
          vacancy.candidates = candidates;
          res.json(vacancy);
        })
        .catch((err) => res.status(404).json({ message: "Ошибка при получении списка кандидатов" }))
    })
    .catch((err) => 
      res.status(404).json({ message: "Ошибка при получении данных вакансии" })
    )
});

module.exports = router;
