import express from "express"
import { UploadedFile } from "express-fileupload";
import Document from '../../models/Document'
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.get("/", (req, res) => {
  Document
    .find()
    .then((documents) => res.json(documents))
    .catch((err) => res.status(404).json(err))
})

router.post('/', (req, res) => {
  const document = new Document(req.body)

  document
    .save()
    .then((document) => res.json(document))
    .catch((err) => {
      console.error(err);
      return res.status(400).json({ message: "Не удалось добавить документ" })
    })
})

router.delete("/:id", function(req, res) {
  Document
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ status: true }))
    .catch((err) => res.status(503).json({ message: "Не удалось удалить вакансию" }));
});

router.post('/upload', async (req, res) => {
  try {
    if(!req.files) {
      res.status(400).json({
        status: false,
        message: 'Не удалось загрузить файл'
      })
    } else {
      const document = req.files.document as UploadedFile
      const id = uuidv4()
      const fileExt = document.name.split('.')[1]

      document.mv(`./uploads/${id}.${fileExt}`)

      res.json({
        status: true,
        message: 'Файл успешно загружен',
        data: {
          id,
          name: document.name,
          mimetype: document.mimetype,
          ext: fileExt,
          size: document.size
        }
      });
    }
  } catch(err) {
    res.status(500).json(err)
  }
})

export default router
