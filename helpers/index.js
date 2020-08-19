const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

const createConditions = (query) => {
  const conditions = {};

  // Получаем поля для фильтрации запроса к базе данных
  for(let key in query) {
    conditions[key] = objectId(query[key])
  }

  return conditions;
}

module.exports = {
  createConditions
}