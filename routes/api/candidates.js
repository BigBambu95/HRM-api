const express = require("express");
const router = express.Router();

const Candidate = require("../../models/Candidate");
const { createConditions } = require('../../helpers')

router.get("/", function (req, res) {
    Candidate
        .find(createConditions(req.query))
        .then((workers) => res.json(workers))
        .catch((err) =>
            res.status(404).json({ message: "Ошибка при получении списка кандидатов" })
        );
});

router.get("/:id", function(req, res) {
    Candidate
        .findById(req.params.id)
        .then((worker) => res.json(worker))
        .catch((err) =>
            res.status(404).json({ message: "Ошибка при получении данных кандидата" })
        )
});

router.post("/", function(req, res) {
    const candidate = new Candidate({
        ...req.body,
        status: "Рассмотрение резюме"
    });

    candidate
        .save()
        .then((c) => res.json(c))
        .catch((err) => {
            return res.status(503).json({ message: "Не удалось создать кандидата" })
        })
});

module.exports = router;
