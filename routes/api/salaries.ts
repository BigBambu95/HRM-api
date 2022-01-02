import express from 'express'
import Salary from '../../models/Salary'
import Worker from '../../models/Worker';

const router = express.Router();

router.get("/", function (req, res) {
  const { sortKey, sortValue } = req.query as any

  Worker
    .find({ salary: { $gt: [] }})
    .select(['name', 'salary'])
    .populate({
      "path": "salary",
      "match": { "month": "July" },
    })
    .sort('')
    .lean()
    .exec()
    .then((workers) => {
      const newWorkers = workers.map((worker) => ({ 
        ...worker, 
        salary: worker.salary[0] as any
      }))

      res.json(newWorkers.sort((a, b) => {
        if(sortValue === 'asc') {
          return a.salary[sortKey] - b.salary[sortKey]
        }

        return b.salary[sortKey] - a.salary[sortKey]
      }))
    })
    .catch((err) => res.status(404).json({ message: "Ошибка при получении списка зарплат" }));
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
