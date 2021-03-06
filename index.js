const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Routes
const vacancies = require("./routes/api/vacancies");

// Server Port
const PORT = process.env.PORT || 8080;

// DB Connect
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ssc1v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(dbUri, dbOptions)
  .then((data) => console.log("База данных успешно подключена"))
  .catch((err) => console.error(err));

// Middleware
app.use(cors());

app.use("/api/vacancies", vacancies);

app.get("/", (req, res) => {
  res.send("hEllo world");
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу: http://localhost:${PORT}`);
});
