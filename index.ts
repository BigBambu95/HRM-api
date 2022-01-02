import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'

// Routes import
import { 
  vacancies, 
  offices, 
  workers, 
  departments, 
  documents, 
  professions, 
  salaries,
  candidates 
} from "./routes/api"

const app = express()
dotenv.config()

// Server Port
const PORT = process.env.PORT || 8080

const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ssc1v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(dbUri)
  .then(() => console.log("База данных успешно подключена"))
  .catch((err) => console.error(err))

// Middleware
app.use(express.static('static'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload({
  createParentPath: true,
  limits: { fileSize: 50 * 1024 * 1024 },
}))

// Routes
app.use("/api/vacancies", vacancies)
app.use("/api/offices", offices)
app.use("/api/workers", workers)
app.use("/api/documents", documents)
app.use("/api/departments", departments)
app.use("/api/professions", professions)
app.use("/api/salaries", salaries)
app.use("/api/candidates", candidates)

app.use((req, res, next) => {
  res.status(404);
  res.send('Route not found');
});

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу: http://localhost:${PORT}`)
});
