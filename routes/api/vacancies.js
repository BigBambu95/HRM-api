var express = require("express");
var router = express.Router();

const Vacancy = require("../../models/Vacancy");
const Candidate = require("../../models/Candidate");
const { createConditions } = require('../../helpers')

router.get("/", function (req, res) {
  Vacancy
    .find(createConditions(req.query))
    .then((vacancies) => res.json(vacancies))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка вакансий" })
    );
});

router.post("/", function(req, res) {
  // TODO Сделать нормальную серверную валидацию
  if(req.body.profession.length < 3) return res.json({ message: "Поле специальность обязательно для заполнения" });
  if(req.body.office.length < 2) return res.json({ message: "Поле офис обязательно для заполнения" });
  if(req.body.date.length < 6) return res.json({ message: "Поле крайний срок обязательно для заполнения" });
  
  const vacancy = new Vacancy(req.body);

  vacancy
    .save()
    .then((vacancy) => res.json(vacancy))
    .catch((err) => {
      return res.status(503).json({ message: "Не удалось создать вакансию" })
    })
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

router.delete("/:id", function(req, res) {
  Vacancy
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ status: true }))
    .catch((err) => res.status(503).json({ message: "Не удалось удалить вакансию" }));
});

router.put("/:id", function (req, res) {

    Vacancy
        .findByIdAndUpdate(req.params.id, { candidates: req.body })
        .then((vacancy) => res.json(vacancy))
        .catch((err) => {
            return res.status(503).json({ message: "Не удалось добавить резюме" })
        })
})


module.exports = router;
