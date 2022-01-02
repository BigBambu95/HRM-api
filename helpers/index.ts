import { Schema } from 'mongoose'

export const createConditions = (query: Record<any, any>) => {
  const conditions: Record<string, Schema.Types.ObjectId> = {};

  // Получаем поля для фильтрации запроса к базе данных
  for(let key in query) {
    conditions[key] = query[key]
  }

  return conditions;
}
