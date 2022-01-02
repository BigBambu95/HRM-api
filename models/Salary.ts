import { prop, getModelForClass, mongoose } from '@typegoose/typegoose';

class Salary {
  @prop({ required: true })
  public year: number

  @prop({ required: true })
  public month: string

  @prop({ required: true })
  public hours: number

  @prop({ required: true })
  public hourlySalary: number

  @prop({ required: true, default: 0 })
  public lateness: number

  @prop({ required: true, default: 0 })
  public absenteeism: number
}

export default getModelForClass(Salary)