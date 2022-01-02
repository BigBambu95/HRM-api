import express from 'express'
import Profession from '../../models/Profession'

const router = express.Router()

router.get("/", function(req, res) {
  Profession
    .find()
    .then((professions) => res.json(professions))
    .catch((err) => 
      res.status(404).json({ message: "Ошибка при получении списка профессий" })
    )
});

export default router
