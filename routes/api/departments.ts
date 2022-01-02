import express from 'express'
import Department from '../../models/Department';

const router = express.Router();

router.get("/", function (req, res) {
  Department
    .find()
    .then((departments) => res.json(departments))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка отделов" })
    );
});

export default router
