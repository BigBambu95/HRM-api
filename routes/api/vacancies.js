var express = require("express");
var router = express.Router();

const Vacancy = require("../../models/Vacancy");
const Candidate = require("../../models/Candidate");
const { createConditions } = require('../../helpers')

// Получение списка вакансий
router.get("/", function (req, res) {
  Vacancy
    .find(createConditions(req.query))
    .then((vacancies) => res.json(vacancies))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка вакансий" })
    );
});

// Создание вакансии
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

// Получение вакансии по id
router.get("/:id", function(req, res) {
  Vacancy
    .findById(req.params.id)
    .then((vacancy) => {
      Candidate
        .find({ _id: vacancy.candidates })
        .then((candidates) => {
          const newVacancy = { ...vacancy }
          newVacancy.candidates = candidates;
          res.json(newVacancy);
        })
        .catch((err) => res.status(404).json({ message: "Ошибка при получении списка кандидатов" }))
    })
    .catch((err) => 
      res.status(404).json({ message: "Ошибка при получении данных вакансии" })
    )
});

// Удаление вакансии
router.delete("/:id", function(req, res) {
  Vacancy
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ status: true }))
    .catch((err) => res.status(503).json({ message: "Не удалось удалить вакансию" }));
});

// Добавление кандидата в вакансию
router.put("/:id", async (req, res) => {
  const vacancy = await Vacancy.findById(req.params.id)

  Vacancy
    .findByIdAndUpdate(req.params.id, { candidates: [...vacancy.candidates, req.body.id]})
    .then((updatedVacancy) => res.json(updatedVacancy))
    .catch((err) => res.status(503).json({ message: "Не удалось добавить кандидата" }))

})


module.exports = router;
