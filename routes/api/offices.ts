import express from 'express'
import Office from '../../models/Office'

const router = express.Router();

router.get("/", function (req, res) {
  Office
    .find()
    .then((offices) => res.json(offices))
    .catch((err) =>
      res.status(404).json({ message: "Ошибка при получении списка офисов" })
    );
});

export default router