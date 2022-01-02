import express from 'express'
import Salary from '../../models/Salary'
import Worker from '../../models/Worker';

const router = express.Router();

router.get("/", function (req, res) {
  Worker
    .find()
    .populate('salary')
    // .find({ "salary.month": 'July' })
    .then((workers) => {
      
      res.json(workers)
    })
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка зарплат" })
    );
});

router.get("/:id", function (req, res) {
  Salary
    .find({ _id: req.params.id })
    .then((salary) => res.json(salary))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении зарплаты сотрудника" })
    );
});

export default router
