import express from "express"
import Worker from '../../models/Worker'
import { createConditions } from '../../helpers'

const router = express.Router();

router.get("/", function (req, res) {
  Worker
    .find(createConditions(req.query))
    .then((workers) => res.json(workers))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка сотрудников" })
    );
});

router.get("/:id", function(req, res) {
  Worker
    .findById(req.params.id)
    .then((worker) => res.json(worker))
    .catch((err) => 
      res.status(404).json({ message: "Ошибка при получении данных сотрудника" })
    )
});

export default router