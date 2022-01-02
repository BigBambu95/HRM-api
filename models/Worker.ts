import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose'

class Worker {
  @prop({ required: true })
  public name: string
  
  @prop()
  public phone: string

  @prop({ required: true })
  public email: string

  @prop({ required: true, ref: 'Profession' })
  public profession: mongoose.Schema.Types.ObjectId

  @prop({ required: true, ref: 'Office' })
  public office: mongoose.Schema.Types.ObjectId

  @prop({ required: true, ref: 'Department' })
  public department: mongoose.Schema.Types.ObjectId

  @prop({ required: true, ref: 'Salary' })
  public salary: mongoose.Schema.Types.ObjectId[]

  @prop()
  public status?: string

  @prop()
  public avatar?: string

  @prop()
  public tags?: string[]
}

export default getModelForClass(Worker)