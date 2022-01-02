import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose'

class Vacancy {
  @prop({ required: true, ref: 'Profession' })
  public profession: mongoose.Schema.Types.ObjectId

  @prop({ required: true, ref: 'Office' })
  public office: mongoose.Schema.Types.ObjectId

  @prop({ required: true })
  public date: Date

  @prop()
  public url?: string

  @prop({ ref: 'Candidate', default: [] })
  public candidates: mongoose.Schema.Types.ObjectId[]
}

export default getModelForClass(Vacancy)
