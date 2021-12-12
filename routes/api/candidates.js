const express = require("express");
const router = express.Router();

const Candidate = require("../../models/Candidate");
const { createConditions } = require('../../helpers')

// Получение списка кандидатов
router.get("/", function (req, res) {
    Candidate
        .find(createConditions(req.query))
        .then((workers) => res.json(workers))
        .catch((err) =>
            res.status(404).json({ message: "Ошибка при получении списка кандидатов" })
        );
});

// Получение кандидата по id
router.get("/:id", function(req, res) {
    Candidate
        .findById(req.params.id)
        .then((worker) => res.json(worker))
        .catch((err) =>
            res.status(404).json({ message: "Ошибка при получении данных кандидата" })
        )
});

// Создание кандидата
router.post("/", function(req, res) {
    const candidate = new Candidate(req.body);

    candidate
        .save()
        .then((c) => res.json(c))
        .catch((err) => {
            return res.status(503).json({ message: "Не удалось создать кандидата" })
        })
});

module.exports = router;
